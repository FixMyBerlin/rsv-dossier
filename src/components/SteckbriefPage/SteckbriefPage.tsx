import React from 'react';
import { ButtonLink } from '~/components/Links';
import { RSVMap } from '~/components/Map';
import 'maplibre-gl/dist/maplibre-gl.css';
import { SteckbriefPageProgressBar } from '~/components/SteckbriefPage';
import { Heading2 } from '~/components/Text';
import { Footer } from '../Layout';

export const SteckbriefPage: React.FC<Queries.SteckbriefQuery> = ({
  meta,
  geometry,
}) => {
  return (
    <div className="relative min-h-[860px] bg-white">
      {/* mx-auto flex aspect-square max-h-[860px] max-w-full overflow-hidden md:max-w-[860px] */}
      <div className="mx-auto flex aspect-square max-h-[860px] overflow-hidden overscroll-none md:max-w-[860px] lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:z-10 lg:mx-0 lg:h-full lg:max-h-full lg:w-[50%] lg:items-stretch">
        <RSVMap meta={meta} geometry={geometry} />
      </div>
      {/* mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-12 */}
      <div className="mx-auto lg:mx-0 lg:ml-[50%] lg:px-0 lg:py-0">
        <div className="py-12 px-4 lg:mr-0 lg:px-0 lg:pl-24 lg:pr-12">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {Number.isNaN(parseFloat(meta.general.ref)) &&
              `${meta.general.ref}: `}
            {meta.general.name}
          </h1>
          <div className="mt-6">
            <SteckbriefPageProgressBar currentState={meta.state} />
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
            {`${meta.general.from.city} - ${meta.general.to.city}`}
          </p>
          <Heading2>Länge</Heading2>
          <p className="text-lg text-gray-500 sm:text-xl">
            ca. {meta.general.length.toLocaleString('de-DE')}&thinsp;km
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};
