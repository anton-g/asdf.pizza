import type * as Party from 'partykit/server'
import { Ai } from 'partykit-ai'

const SEARCH_SINGLETON_ROOM_ID = 'api'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
}

type Episode = {
  title: string
  description: string
  slug: string
  body: string
  date: string
  number: number
  transcription: { speaker: string; timestamp: string; line: string }[]
  joke?: {
    setup: string
    punchline: string
    author?: string
  }
}

type Found = Omit<Episode, 'description'> & { score: number }

async function getEpisodes(): Promise<Episode[]> {
  return await fetch('https://asdf.pizza.com/episodes.json').then((res) => res.json())
}

export default class SearchServer implements Party.Server {
  ai: Ai

  constructor(public room: Party.Room) {
    this.ai = new Ai(room.context.ai)
  }

  async onMessage(msg: string, connection: Party.Connection) {
    const message = JSON.parse(msg)

    if (message.type === 'init') {
      // Minimal security! Only allow the admin key to trigger a rebuild
      if (message.adminKey !== this.room.env.ASDF_SEARCH_ADMIN_KEY) {
        this.room.broadcast(JSON.stringify({ type: 'error', error: 'Unauthorized' }))
        return
      }
      await this.buildIndex()
    }
  }

  broadcastProgress(current: number, target: number) {
    console.log(`Progress: ${current} / ${target}`)
    this.room.broadcast(
      JSON.stringify({
        type: 'progress',
        target: target,
        progress: current,
      })
    )
  }

  async buildIndex() {
    const episodes = await getEpisodes()
    this.broadcastProgress(0, episodes.length)

    const PAGE_SIZE = 5 // higher is faster, but can hit rate limits

    for (let i = 0; i < episodes.length; i += PAGE_SIZE) {
      try {
        await retry(async () => {
          await this.index(episodes.slice(i, i + PAGE_SIZE))
        })

        this.broadcastProgress(i, episodes.length)
      } catch (err) {
        console.error(err)
        this.room.broadcast(
          JSON.stringify({
            type: 'error',
            error: (err as Error).message || err,
          })
        )
        throw err
      }
    }

    this.room.broadcast(
      JSON.stringify({
        type: 'done',
      })
    )
  }

  async onRequest(req: Party.Request) {
    if (this.room.id !== SEARCH_SINGLETON_ROOM_ID) {
      return new Response('Not Found', { status: 404 })
    }

    if (req.method === 'POST') {
      const { query } = (await req.json()) as any
      const found = await this.search(query)
      return Response.json({ episodes: found }, { status: 200, headers: CORS })
    }

    // respond to cors preflight requests
    if (req.method === 'OPTIONS') {
      return Response.json({ ok: true }, { status: 200, headers: CORS })
    }

    return new Response('Method Not Allowed', { status: 405 })
  }

  async index(episodes: Episode[]) {
    // Get embeddings for episodes
    const { data: embeddings } = await this.ai.run('@cf/baai/bge-base-en-v1.5', {
      text: episodes.map(
        (episode) =>
          `Titel: ${episode.title}, beskrivning: ${episode.body}, ${
            episode.joke
              ? `Skämt: ${episode.joke.setup}, ${episode.joke.punchline}${
                  episode.joke.author ? ` från ${episode.joke.author}` : ''
                }`
              : ''
          }`
      ),
    })

    // Vectorize uses vector objects. Combine the episodes list with the embeddings
    const vectors = episodes.map((episode, i) => ({
      id: episode.slug,
      values: embeddings[i],
      metadata: {
        title: episode.title,
        slug: episode.slug,
        date: episode.date,
        number: episode.number,
      },
    }))

    // Upsert the embeddings into the database
    await this.room.context.vectorize.searchIndex.upsert(vectors)
  }

  async search(query: string) {
    // Get the embedding for the query
    const { data: embeddings } = await this.ai.run('@cf/baai/bge-base-en-v1.5', {
      text: [query],
    })

    // Search the index for the query vector
    const nearest: any = await this.room.context.vectorize.searchIndex.query(embeddings[0], {
      topK: 15,
      returnValues: false,
      returnMetadata: true,
    })

    // Convert to a form useful to the client
    const found: Found[] = nearest.matches.map((match: any) => ({
      id: match.vectorId,
      ...match.vector.metadata,
      score: match.score,
    }))

    return found
  }
}

// API calls be a bit flaky. Here's a helper to retry them a few times
async function retry<T>(fn: () => Promise<T>, retries: number = 5): Promise<T> {
  try {
    return await fn()
  } catch (err) {
    if (retries > 0) {
      console.log('Retrying...')
      return await retry(fn, retries - 1)
    }
    throw err
  }
}
