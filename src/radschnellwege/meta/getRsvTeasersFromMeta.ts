import type { MetaSchema } from 'data/zod/metaSchema'

export const getRsvTeasersFromMeta = (meta: MetaSchema[]) => {
  return meta.map((rsv) => {
    return {
      jsonId: rsv.id as MetaSchema['id'],
      general: {
        ref: rsv.general.ref as MetaSchema['general']['ref'],
        name: rsv.general.name as MetaSchema['general']['name'],
        description: rsv.general.description as MetaSchema['general']['description'],
      },
      state: rsv.state as MetaSchema['state'],
      staticMap: `/rsv-map-images/${rsv.id}.png`,
    }
  })
}
