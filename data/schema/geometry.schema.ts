import { z } from "zod"

export const geometrySchema = z.object({ "id": z.string(), "crs": z.object({ "type": z.literal("name").optional(), "properties": z.any().optional() }), "type": z.literal("FeatureCollection"), "features": z.array(z.object({ "type": z.literal("Feature"), "id": z.union([z.number(), z.string()]).optional(), "properties": z.object({ "id": z.string(), "detail_level": z.enum(["exact","rough","corridor","approximated"]), "state": z.enum(["idea","agreement_process","planning","in_progress","done"]), "id_rsv": z.string(), "planning_phase": z.any().superRefine((x, ctx) => {
    const schemas = [z.enum(["pilot","preliminary","design","approval","execution"]), z.null()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }), "variant": z.enum(["Vorzugstrasse","Alternative"]), "discarded": z.boolean(), "length": z.number(), "description:planning_phase": z.union([z.string(), z.null()]).optional() }), "geometry": z.object({ "type": z.literal("MultiLineString"), "coordinates": z.array(z.array(z.array(z.number()).min(2).max(2)).min(2)) }), "bbox": z.array(z.number()).min(4).max(4) })), "bbox": z.array(z.number()).min(4) }).strict()
export type GeometrySchema = z.infer<typeof geometrySchema>
