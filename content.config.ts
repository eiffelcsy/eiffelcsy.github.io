import { defineCollection, z } from '@nuxt/content'

export const collections = {
  blog: defineCollection({
    type: 'page',
    source: 'blog/*.md',
    schema: z.object({
      title: z.string(),
      date: z.string(),
      category: z.string(),
      readTime: z.number(),
      subtitle: z.string().optional(),
    }),
  }),
}
