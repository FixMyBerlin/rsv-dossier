import { z } from 'zod'

export const metaSchema = z
  .object({
    id: z.string().describe('Distinct id for every cycle highway.'),
    general: z.object({
      ref: z.string().optional(),
      name: z.string().optional(),
      from: z.object({ city: z.string().optional(), federalState: z.string().optional() }),
      to: z.object({ city: z.string().optional(), federalState: z.string().optional() }),
      description: z.union([z.string(), z.null()]).optional(),
      source: z
        .any()
        .superRefine((x, ctx) => {
          const schemas = [z.string().url(), z.null()]
          const errors = schemas.reduce<z.ZodError[]>(
            (errors, schema) =>
              ((result) => (result.error ? [...errors, result.error] : errors))(
                schema.safeParse(x),
              ),
            [],
          )
          if (schemas.length - errors.length !== 1) {
            ctx.addIssue({
              path: ctx.path,
              code: 'invalid_union',
              unionErrors: errors,
              message: 'Invalid input: Should pass single schema',
            })
          }
        })
        .optional(),
      stand: z.string().regex(new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')),
      length: z.number(),
    }),
    stakeholders: z
      .tuple([
        z.object({
          name: z.string(),
          roles: z.tuple([z.enum(['communication', 'authority', 'construction_company'])]),
          description: z.string().optional(),
        }),
      ])
      .optional(),
    state: z.enum(['idea', 'agreement_process', 'planning', 'in_progress', 'done']),
    detail_level: z.enum(['exact', 'approximated', 'corridor']).optional(),
    finished: z
      .any()
      .superRefine((x, ctx) => {
        const schemas = [z.string().date(), z.null()]
        const errors = schemas.reduce<z.ZodError[]>(
          (errors, schema) =>
            ((result) => (result.error ? [...errors, result.error] : errors))(schema.safeParse(x)),
          [],
        )
        if (schemas.length - errors.length !== 1) {
          ctx.addIssue({
            path: ctx.path,
            code: 'invalid_union',
            unionErrors: errors,
            message: 'Invalid input: Should pass single schema',
          })
        }
      })
      .describe('Year or date when building of all segments have been done.'),
    cost: z.union([z.string(), z.number(), z.null()]),
    references: z
      .object({
        osm_relation: z.number().optional(),
        website: z
          .any()
          .superRefine((x, ctx) => {
            const schemas = [z.string().url(), z.null()]
            const errors = schemas.reduce<z.ZodError[]>(
              (errors, schema) =>
                ((result) => (result.error ? [...errors, result.error] : errors))(
                  schema.safeParse(x),
                ),
              [],
            )
            if (schemas.length - errors.length !== 1) {
              ctx.addIssue({
                path: ctx.path,
                code: 'invalid_union',
                unionErrors: errors,
                message: 'Invalid input: Should pass single schema',
              })
            }
          })
          .optional(),
        copyright_geometry: z.string().optional(),
      })
      .optional(),
  })
  .describe(
    'This schema describes the state and basic information about one cycle highway (Radschnellverbindung)',
  )
export type MetaSchema = z.infer<typeof metaSchema>
