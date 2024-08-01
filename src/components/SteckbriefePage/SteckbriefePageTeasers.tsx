import { TeaserCard } from '@components/Teaser/TeaserCard'
import type { MetaSchemaRSV } from 'data/types/meta'
import { TeasersContainer } from '../Teaser/TeasersContainer'

export type RsvTeaser = {
  jsonId: MetaSchemaRSV['id']
  general: {
    ref: MetaSchemaRSV['general']['ref']
    name: MetaSchemaRSV['general']['name']
    description: MetaSchemaRSV['general']['description']
  }
  state: MetaSchemaRSV['state']
  staticMap: string
}

type Props = {
  rsvTeasers: RsvTeaser[]
}

export const SteckbriefePageTeasers: React.FC<Props> = ({ rsvTeasers }) => {
  const steckbriefePath = (id: string) => `/steckbriefe/${id}`

  return (
    <TeasersContainer>
      {rsvTeasers.map((rsvTeaser) => (
        <TeaserCard
          key={rsvTeaser.jsonId}
          title={
            // @ts-expect-error
            (Number.isNaN(parseFloat(rsvTeaser.general.ref)) ? `${rsvTeaser.general.ref}: ` : '') +
            (rsvTeaser.general.name || rsvTeaser.jsonId)
          }
          description={rsvTeaser.general.description || undefined}
          tag={rsvTeaser.state}
          href={steckbriefePath(rsvTeaser.jsonId)}
          image={rsvTeaser.staticMap}
        />
      ))}
    </TeasersContainer>
  )
}
