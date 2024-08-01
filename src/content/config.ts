// @ts-ignore
import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      type: z.string(),
      teaserText: z.string(),
      date: z.date(),
      order: z.number(),
      teaserImage: image(),
      imageCopyright: z.string(),
      showOnHome: z.boolean().optional(),
    }),
})

export const collections = {
  posts: postsCollection,
}
