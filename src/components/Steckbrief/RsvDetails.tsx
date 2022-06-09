import React from 'react';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { ExternalLink } from '~/components/Links';
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
    <div className="relative max-h-[1600x] bg-white lg:min-h-[calc(100vh-theme(space.24))]">
      <div className="flex h-80 max-h-[1600px] max-w-[1600px] overflow-hidden lg:absolute lg:left-0 lg:h-full lg:max-h-[calc(100vh-theme(space.24))] lg:w-1/2 lg:rounded-br-2xl lg:shadow-xl">
        <RSVMap meta={meta} geometry={geometry} />
      </div>
      <div className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:w-1/2 lg:max-w-none lg:pl-14">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {meta.general.name}
          </h1>
          <div className="mt-6">
            <RsvProgressBar current="planning" />
          </div>
          <Heading2>Kurzfassung</Heading2>
          <p className="text-lg text-gray-500">
            {meta.general.description} Quelle:&nbsp;
            <ExternalLink href={meta.general.source}>
              {new URL(meta.general.source).hostname}
            </ExternalLink>
          </p>
          <Heading2>Kurzfassung</Heading2>
          <p className="text-lg text-gray-500">{meta.general.description}</p>
          {meta.references.website && (
            <ButtonLink newWindow to={meta.references.website} className="mt-6">
              Projektwebsite
            </ButtonLink>
          )}
          <Heading2>Trassenführung</Heading2>
          <p className="text-lg text-gray-500 sm:text-xl">
            {`${meta.general.from} - ${meta.general.to}`}
          </p>
          <Heading2>Länge</Heading2>
          <p className="text-lg text-gray-500 sm:text-xl">
            {meta.general.length}
          </p>
        </div>
      </div>
    </div>
  );
};
