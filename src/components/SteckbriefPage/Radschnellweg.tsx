import clsx from 'clsx'
import type { MetaSchemaRSV } from 'data/types/meta'

import type { GeoJSONFeatureCollectionRSV } from 'data/types/geometry'
import React, { useState } from 'react'
import { LayoutSteckbrief } from 'src/layouts/LayoutSteckbrief'
import { SteckbriefPage } from './SteckbriefPage'
import { SteckbriefUpdateInfo } from './SteckbriefPageUpdateInfo'

type Props = {
  meta: MetaSchemaRSV
  geometry: GeoJSONFeatureCollectionRSV
}

export const Radschnellweg: React.FC<Props> = ({ meta, geometry }) => {
  // if the ref is official (not an arbitrary number picked by us) display it in the name
  // @ts-expect-error undefined would also return NaN so nothing breaks
  const name = Number.isNaN(parseFloat(meta.general.ref))
    ? `${meta.general.ref}: ${meta.general.name}`
    : meta.general.name || `${meta.general.from.city} - ${meta.general.to.city}`

  const [overlay, setOverlay] = useState<boolean>(false)
  const closeIfOpen = () => {
    if (overlay) {
      setOverlay(false)
    }
  }
  return (
    <div>
      <div
        aria-haspopup="dialog"
        aria-hidden="true"
        onKeyDown={closeIfOpen}
        onClick={closeIfOpen}
        className={clsx(overlay && 'fixed bottom-0 left-0 right-0 top-0 blur-[2px]')}
      >
        {overlay && (
          <div className="fixed bottom-0 left-0 right-0 top-0 z-50 min-h-full min-w-full bg-gray-300/30" />
        )}
        <LayoutSteckbrief>
          <SteckbriefPage meta={meta} geometry={geometry} setOverlay={setOverlay} />
        </LayoutSteckbrief>
      </div>
      {overlay && <SteckbriefUpdateInfo setOverlay={setOverlay} name={name} />}
    </div>
  )
}
