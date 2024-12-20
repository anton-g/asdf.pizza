// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'
// 2. Define your collection(s)
const episodeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    number: z.number(),
    description: z.string(),
    pinecastId: z.string(),
    spotifyId: z.string().optional(),
    itunesId: z.string().optional(),
    joke: z
      .object({
        setup: z.string(),
        punchline: z.string(),
        author: z.string().optional(),
      })
      .optional(),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  episodes: episodeCollection,
  advent22: episodeCollection,
  advent23: episodeCollection,
  advent24: episodeCollection,
}
