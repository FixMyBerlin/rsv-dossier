import classNames from 'classnames';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useEffect, useState } from 'react';
import { getOptInCookie, OptIn } from '~/components/CookieConsent/';
import { Attribution, DynamicMap } from '.';
import { navHeightClasssName } from '../Layout';
import { Legend } from './Legend';

export const RSVMap: React.FC<Queries.SteckbriefQuery> = ({
  meta,
  geometry,
}) => {
  const [consent, setConsent] = useState<boolean | null>(true);
  useEffect(() => setConsent(getOptInCookie()));
  return (
    <div className="relative max-h-full max-w-full bg-[#F9FAFC]">
      {consent === null && (
        <div className="absolute bottom-16 z-20 mx-2 translate-y-1 md:mx-5">
          <OptIn setConsent={setConsent} />
        </div>
      )}

      <div className="absolute bottom-0 right-0 left-0 z-10 ">
        <div className="mr-2 mb-2 translate-y-1 translate-x-1 text-xs">
          <Attribution />
        </div>
        <Legend />
      </div>

      <div className={classNames(navHeightClasssName, 'hidden lg:block')} />
      {consent && <DynamicMap geometry={geometry} />}
      <GatsbyImage
        image={getImage(
          meta.staticMap as ImageDataLike & { publicURL: string }
        )}
        alt="Statische Karte"
      />
    </div>
  );
};
