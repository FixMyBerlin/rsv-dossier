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
      preview: z.boolean(),
      order: z.number(),
      teaserImage: image(),
      imageCopyright: z.string(),
      showOnHome: z.boolean().optional(),
    }),
})

export const geometrySchema = z
  .object({
    id: z.string(),
    crs: z.object({ type: z.literal('name').optional(), properties: z.any().optional() }),
    type: z.literal('FeatureCollection'),
    features: z.array(
      z.object({
        type: z.literal('Feature'),
        id: z.union([z.number(), z.string()]).optional(),
        properties: z.object({
          id: z.string(),
          detail_level: z.enum(['exact', 'rough', 'corridor', 'approximated']),
          state: z.enum(['idea', 'agreement_process', 'planning', 'in_progress', 'done']),
          id_rsv: z.string(),
          planning_phase: z.any(),
          variant: z.enum(['Vorzugstrasse', 'Alternative']),
          discarded: z.boolean(),
          length: z.number(),
          'description:planning_phase': z.union([z.string(), z.null()]).optional(),
        }),
        geometry: z.object({
          type: z.literal('MultiLineString'),
          coordinates: z.array(z.array(z.array(z.number()).min(2).max(2)).min(2)),
        }),
        bbox: z.array(z.number()).min(4).max(4),
      }),
    ),
    bbox: z.array(z.number()).min(4),
  })
  .strict()

const geometryCollection = defineCollection({
  type: 'data',
  schema: geometrySchema,
})

export const collections = {
  planningposts: postsCollection,
  communicationposts: postsCollection,
  geometries: geometryCollection,
}

export type GeometrySchema = z.infer<typeof geometrySchema>
