import 'maplibre-gl/dist/maplibre-gl.css'
import React, { useState } from 'react'

import clsx from 'clsx'
import { navHeightClasssName } from 'src/layouts/navigation/Navigation'

import { Attribution } from './Attribution'
import { DynamicMap } from './DynamicMap'
import { Legend } from './Legend'
type Props = {
  meta: any // todo
  geometry: any // todo
}

export const RSVMap: React.FC<Props> = ({ meta, geometry }) => {
  const [consent, setConsent] = useState<boolean | null>(true)
  // useEffect(() => setConsent(getOptInCookie())) // todo
  return (
    <div className="relative max-h-full max-w-full bg-[#F9FAFC]">
      {consent === null && (
        <div className="absolute bottom-16 z-20 mx-2 translate-y-1 md:mx-5">
          {/* <OptIn setConsent={setConsent} /> */}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="mb-2 mr-2 translate-x-1 translate-y-1 text-xs">
          <Attribution />
        </div>
        <Legend />
      </div>

      <div className={clsx(navHeightClasssName, 'hidden lg:block')} />
      {consent && <DynamicMap geometry={geometry} />}
      <img src={`/staticMapImages/${meta.id}.png`} alt="Statische Karte" />
    </div>
  )
}
