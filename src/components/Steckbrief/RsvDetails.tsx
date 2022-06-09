import React from 'react';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { RSVMap } from '~/components/Map';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RsvProgressBar } from '~/components/Steckbrief';
import { MetaJson, StaticMap } from '~/types/index';
import { Heading2 } from '~/components/Text';

type Props = {
  meta: MetaJson & StaticMap;
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
};

export const RSVDetails: React.FC<Props> = ({ meta, geometry }) => {
  return (
    <div className="relative max-h-[1080px] bg-white lg:min-h-[calc(100vh-theme(space.24))]">
      <div className="flex h-80 max-h-[1080px] max-w-[1920px] overflow-hidden lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <RSVMap meta={meta} geometry={geometry} />
      </div>
      <div className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:w-1/2 lg:max-w-none lg:pl-14">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {meta.general.name}
          </h1>
          <div className="mt-6">
            <RsvProgressBar current="planning" />
          </div>
          <Heading2>Kurzfassung</Heading2>
          <p className="text-lg text-gray-500">{meta.general.description}</p>
          {meta.references.website && (
            <div className="mt-4 rounded-full">
              <ButtonLink
                to={meta.references.website}
                className="btn-brand-outline px-8 py-3 shadow md:text-lg"
              >
                Projektwebsite
              </ButtonLink>
            </div>
          )}
          <Heading2>Trassenführung</Heading2>
          <p className="text-lg text-gray-500 sm:text-xl">
            {`${meta.general.from} - ${meta.general.to}`}
          </p>
          <Heading2>Länge</Heading2>
          <p className="text-lg text-gray-500 sm:text-xl">10&thinsp;km</p>
        </div>
      </div>
    </div>
  );
};
