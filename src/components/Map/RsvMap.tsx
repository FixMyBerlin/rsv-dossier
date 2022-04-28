import React, { useEffect, useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import 'maplibre-gl/dist/maplibre-gl.css';
import { getOptInCookie, OptIn } from '~/components/CookieConsent/';
import { MetaJson, StaticMap } from '~/types/index';
import { DynamicMap } from '.';

type Props = {
  meta: MetaJson & StaticMap;
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
};

export const RSVMap: React.FC<Props> = ({ meta, geometry }) => {
  const [consent, setConsent] = useState<boolean | null>(null);
  useEffect(() => setConsent(getOptInCookie()));
  if (!consent) {
    return (
      <div className="relative max-h-full max-w-full">
        {consent === null && (
          <div className="absolute bottom-0 z-10 mx-2 translate-y-1 md:mx-5">
            <OptIn setConsent={setConsent} />
          </div>
        )}
        <GatsbyImage
          image={meta.staticMap.childImageSharp.gatsbyImageData}
          alt="Statische Karte"
        />
      </div>
    );
  }
  return <DynamicMap geometry={geometry} />;
};
