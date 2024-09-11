# About

Schema validateion and types Meta and Geometry data:
In case we need to update the schema of meta or geometry, we manually do so in the json schemas in src/data/schemas/. To validate the geometry data in src/content/gemetries we need a zod schema. We generate our types and the zod schemas based on the json schemas.

## Initial Setup

1. Install [Json-Schema-to-Zod](https://www.npmjs.com/package/json-schema-to-zod).

## General process

1. Update the json schemas for geometry or meta in src/data/schemas/
2. Run `npm run updateGeometrySchema` to update zod schmea an types for geometry.
   or Run `npm run updateMetaSchema` to update zod schmea an types for meta.
3. Chek the generated zod schmema and type in src/data/schemas/.
4. Geometry: Replace geometrySchema in src/content/config.ts with the generated schmea.
   If necessary simplify schema - you can also update the command and use the [depth flag](https://www.npmjs.com/package/json-schema-to-zod) when generating if necessary.
