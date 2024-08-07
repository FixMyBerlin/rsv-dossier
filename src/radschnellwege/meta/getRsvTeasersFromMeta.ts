import type { MetaSchema } from 'data/zod/metaSchema'
import meta from 'src/radschnellwege/meta/meta.json'

export const getRsvTeasersFromMeta = () => {
  return meta.map((rsv) => {
    return {
      jsonId: rsv.id as MetaSchema['id'],
      general: {
        ref: rsv.general.ref as MetaSchema['general']['ref'],
        name: rsv.general.name as MetaSchema['general']['name'],
        description: rsv.general.description as MetaSchema['general']['description'],
      },
      state: rsv.state as MetaSchema['state'],
      staticMap: `/staticMapImages/${rsv.id}.png`,
    }
  })
}
