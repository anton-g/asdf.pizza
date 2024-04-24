import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [],
  scopedStyleStrategy: 'where',
  build: {
    inlineStylesheets: 'never',
  },
})
