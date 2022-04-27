import React, { useEffect, useState } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import 'maplibre-gl/dist/maplibre-gl.css';
import { getOptInCookie, OptIn } from '~/components/CookieConsent/';
import { StaticMap } from '~/types/index';
import { DynamicMap } from '.';

type Props = {
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString> & StaticMap;
};

export const RSVMap: React.FC<Props> = ({ geometry }) => {
  const [consent, setConsent] = useState<boolean | null>(null);
  useEffect(() => setConsent(getOptInCookie()));
  if (!consent) {
    return (
      <div className="relative max-h-full max-w-full">
        {consent === false && (
          <div className="absolute top-1/2 z-10 mx-2 -translate-y-1/2 md:mx-5">
            <OptIn setConsent={setConsent} />
          </div>
        )}
        <GatsbyImage
          image={geometry.staticMap.childImageSharp.gatsbyImageData}
          alt="Statische Karte"
        />
      </div>
    );
  }
  return <DynamicMap geometry={geometry} />;
};
