import { getCollection } from 'astro:content'

export async function GET() {
  const episodes = await getCollection('episodes')
  const xmas22 = await getCollection('advent22')
  const xmas23 = await getCollection('advent23')

  const allEpisodes = await Promise.all([
    ...episodes.map(async (entry) => {
      let transcription = null
      try {
        const imported = await import(`../transcriptions/${entry.slug}.json`)
        if (imported) transcription = imported.default
      } catch (error: any) {
        if (!error.message.includes('Unknown variable dynamic import')) {
          throw error
        }
      }
      return {
        slug: entry.slug,
        body: entry.body,
        title: entry.data.title,
        date: entry.data.date,
        number: entry.data.number,
        description: entry.data.description,
        transcription,
        joke: entry.data.joke,
      }
    }),
    // ...xmas22.map(async (entry) => {
    //   return {
    //     slug: 'advent22/' + entry.slug,
    //     body: entry.body,
    //     title: entry.data.title,
    //     date: entry.data.date,
    //     number: entry.data.number,
    //     description: entry.data.description,
    //     transcription: [],
    //   }
    // }),
    ...xmas23.map(async (entry) => {
      return {
        slug: 'julkalendern-2023/' + entry.slug,
        body: entry.body,
        title: entry.data.title,
        date: entry.data.date,
        number: entry.data.number,
        description: entry.data.description,
        transcription: [],
      }
    }),
  ])

  const sorted = allEpisodes.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  return new Response(JSON.stringify(sorted))
}
