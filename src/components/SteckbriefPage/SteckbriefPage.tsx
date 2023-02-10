import 'maplibre-gl/dist/maplibre-gl.css';
import React from 'react';
import { ButtonLink } from '~/components/Links';
import { RSVMap } from '~/components/Map';
import { SteckbriefPageProgressBar } from '~/components/SteckbriefPage';
import { Heading2, Heading3 } from '~/components/Text';
import InfoIcon from './assets/InfoIcon.svg';

type props = {
  setOverlay: (boolean) => void;
};

export const SteckbriefPage: React.FC<Queries.SteckbriefQuery & props> = ({
  meta,
  geometry,
  setOverlay,
}) => {
  return (
    <div className="relative min-h-[860px] bg-white">
      <div className="mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-12">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:ml-[48vw] lg:max-w-4xl lg:px-0 lg:py-0 lg:pl-14">
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {Number.isNaN(parseFloat(meta.general.ref)) &&
              `${meta.general.ref}: `}
            {meta.general.name}
          </h1>
          <div className="mt-8">
            <SteckbriefPageProgressBar currentState={meta.state} />
          </div>
          <div className="mt-8">
            <Heading3>Kurzfassung</Heading3>
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
          </div>
          {meta.references.website && (
            <ButtonLink
              outline
              newWindow
              to={meta.references.website}
              className="mt-6"
            >
              Projektwebsite
            </ButtonLink>
          )}
          <div className="mt-8">
            <Heading2>Projektdetails</Heading2>
            <Heading3>Trassenführung</Heading3>
            <p className="text-lg text-gray-500 sm:text-xl">
              {`${meta.general.from.city} - ${meta.general.to.city}`}
            </p>
            <Heading3>Länge</Heading3>
            <p className="text-lg text-gray-500 sm:text-xl">
              ca. {meta.general.length.toLocaleString('de-DE')}&thinsp;km
            </p>
            <div className="flex min-w-max">
              <div>
                <Heading3>Zuständigkeit</Heading3>
                {meta.stakeholders.map((stakeholder) => (
                  <p
                    key={stakeholder.name}
                    className="text-lg text-gray-500 sm:text-xl"
                  >
                    {stakeholder.name}
                  </p>
                ))}
              </div>
              <div className="flex-grow">
                <button
                  type="button"
                  className="float-right mt-5"
                  onClick={() => setOverlay(true)}
                >
                  <InfoIcon />
                </button>
              </div>
            </div>
            <Heading3>Stand</Heading3>
            <p className="text-lg text-gray-500 sm:text-xl">
              {new Date(meta.general.stand).toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
              })}
            </p>
          </div>
          <div className="mt-12">
            <a href="/datenschutz/">Datenschutz</a>
            {' - '}
            <a href="/impressum/">Impressum</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex aspect-square max-h-[860px] translate-x-1 overflow-hidden overscroll-none md:max-w-[860px] lg:fixed lg:left-0 lg:bottom-0 lg:z-10 lg:mx-0 lg:h-full lg:max-h-full lg:w-[48vw] lg:max-w-[48vw] lg:items-stretch">
        <RSVMap meta={meta} geometry={geometry} />
      </div>
    </div>
  );
};
