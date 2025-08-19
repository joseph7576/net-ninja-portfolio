import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md'
        }),
        blogs: defineCollection({
            type: 'page',
            source: 'blog/*.md'
        })
    },
})
