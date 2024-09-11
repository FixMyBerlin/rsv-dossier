import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://radschnellverbindungen.info',
  integrations: [
    react(),
    markdoc(),
    mdx(),
    keystatic(),
    tailwind(),
    sitemap({
      filter: (page) => !page.endsWith('--preview/'),
    }),
  ],
  output: 'hybrid',
  adapter: netlify(),
})
