todo

json-->zod

`json-schema-to-zod -i data/schema/geometry.schema.json -o data/zod/geometrySchema.ts  -n geometrySchema -m esm --type GeometrySchema`

copy the zod object in content config
if error simplify schema - you can also use the depth flag if necessary
https://www.npmjs.com/package/json-schema-to-zod

we use the same pakage to creatte a type for meta:

`json-schema-to-zod -i data/schema/meta.schema.json -o data/zod/metaSchema.ts  -n metaSchema -m esm --type MetaSchema`
