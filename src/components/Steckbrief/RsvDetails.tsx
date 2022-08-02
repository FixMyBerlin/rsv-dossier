import React from 'react';
import { ButtonLink } from '~/components/Links';
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
    <div className="relative min-h-[860px] bg-white">
      <div className="mx-auto flex aspect-square max-h-[860px] max-w-full overflow-hidden md:max-w-[860px] lg:absolute lg:left-0 lg:w-1/2 lg:shadow-xl">
        <RSVMap meta={meta} geometry={geometry} />
      </div>
      <div className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:w-1/2 lg:max-w-none lg:pl-14">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {Number.isNaN(parseFloat(meta.general.ref)) &&
              `${meta.general.ref}: `}
            {meta.general.name}
          </h1>
          <div className="mt-6">
            <RsvProgressBar current="planning" />
          </div>
          <Heading2>Kurzfassung</Heading2>
          {meta.general.description && (
            <p className="text-lg text-gray-500">
              {meta.general.description}
              <br />
              (Quelle:&nbsp;
              <a
                href={meta.general.source}
                className="text-slate-600 hover:text-slate-700 hover:underline active:underline"
              >
                {new URL(meta.general.source).host}
              </a>
              )
            </p>
          )}
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
            ca. {meta.general.length}&thinsp;km
          </p>
        </div>
      </div>
    </div>
  );
};
