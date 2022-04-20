import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import 'maplibre-gl/dist/maplibre-gl.css';
import { getOptInCookie, OptIn } from '~/components/CookieConsent/';
import { DynamicMap, StaticMap } from '.';

type Props = {
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
};

export const RSVMap: React.FC<Props> = ({ geometry }) => {
  const [consent, setConsent] = useState<boolean | null>(null);
  useEffect(() => setConsent(getOptInCookie()));
  if (!consent) {
    // return <StaticMap geometry={geometry} />;
    return (
      <div className="relative max-h-full max-w-full">
        {consent === false && (
          <div className="absolute top-1/2 z-10 mx-2 -translate-y-1/2 md:mx-5">
            <OptIn setConsent={setConsent} />
          </div>
        )}
        <StaticImage
          layout="fixed"
          src="./map.png"
          alt="Platzhalter Karte"
          className="max-h-full max-w-full blur-sm"
        />
      </div>
    );
  }
  return <DynamicMap geometry={geometry} />;
};
