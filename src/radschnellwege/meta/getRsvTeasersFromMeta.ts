import type { MetaSchemaRSV } from 'data/types/meta'
import meta from 'src/radschnellwege/meta/meta.json'

export const getRsvTeasersFromMeta = () => {
  return meta.map((rsv) => {
    return {
      jsonId: rsv.id as MetaSchemaRSV['id'],
      general: {
        ref: rsv.general.ref as MetaSchemaRSV['general']['ref'],
        name: rsv.general.name as MetaSchemaRSV['general']['name'],
        description: rsv.general.description as MetaSchemaRSV['general']['description'],
      },
      state: rsv.state as MetaSchemaRSV['state'],
      staticMap: '/src/radschnellwege/staticMapImages/images/1_baden_wuerttemberg.png',
      // todo
      // staticMap: `/src/radschnellwege/staticMapImages/images/${rsv.id.replace('-', '_')}.png`,
    }
  })
}
