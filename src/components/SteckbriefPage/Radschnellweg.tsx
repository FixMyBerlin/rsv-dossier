import clsx from 'clsx'

import { InfoIcon } from '@assets/general/tsx/InfoIcon'
import type { MetaSchema } from 'data/schema/meta.schema'
import { useState } from 'react'
import type { GeometrySchema } from 'src/content/config'
import { LayoutSteckbrief } from 'src/layouts/LayoutSteckbrief'
import { SteckbriefPage } from './SteckbriefPage'
import { SteckbriefUpdateInfo } from './SteckbriefPageUpdateInfo'

type Props = {
  meta: MetaSchema
  geometry: GeometrySchema
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
      <div className="fixed bottom-4 right-4 h-36 w-96">
        {overlay && <SteckbriefUpdateInfo setOverlay={setOverlay} name={name} />}
        <button
          type="button"
          className="absolute bottom-3 right-3"
          onClick={() => setOverlay(true)}
        >
          <InfoIcon />
        </button>
      </div>
    </div>
  )
}
