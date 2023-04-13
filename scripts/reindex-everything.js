import algolia from 'algoliasearch'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'
import { convert } from 'html-to-text'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const client = algolia(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY)
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME)

const removeDuplicateNewLines = (content) => {
  if (content.includes('\n\n')) {
    return removeDuplicateNewLines(content.replace(/\n\n/g, '\n'))
  } else {
    return content
  }
}

const reindexEverything = async () => {
  const episodes = fs.readdirSync('../src/content/episodes').filter((file) => file.endsWith('.md'))
  const episodesWithTranscriptions = episodes.map((episode) => {
    const episodeContent = fs.readFileSync(`../src/content/episodes/${episode}`, 'utf8')
    const episodeData = matter(episodeContent)
    const transcriptionFileName = episode.replace('.md', '.json')
    const transcription = JSON.parse(fs.readFileSync(`../src/transcriptions/${transcriptionFileName}`))
    episodeData.transcription = transcription
    episodeData.slug = episode.replace('.md', '')

    return episodeData
  })

  const formattedEpisodes = episodesWithTranscriptions.map((episode) => {
    return {
      slug: episode.slug,
      objectID: episode.data.pinecastId,
      title: episode.data.title,
      content: removeDuplicateNewLines(convert(marked(episode.content), { wordwrap: 9999 })),
      date: episode.data.date,
      number: episode.data.number,
      joke: episode.data.joke,
      transcription: episode.transcription,
    }
  })

  await index.clearObjects()
  await index.saveObjects(formattedEpisodes).catch((err) => console.error(err))
}

reindexEverything()
