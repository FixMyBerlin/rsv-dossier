import React from 'react';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { RSVMap } from '~/components/Map';
import 'maplibre-gl/dist/maplibre-gl.css';
import { geometryJson, metaJson } from '~/types/steckbrief';

type Props = metaJson & geometryJson;

export const RSVDetails: React.FC<Props> = ({ meta, geometry }) => {
  return (
    <div className="relative max-h-[1080px] bg-white lg:min-h-[calc(100vh-theme(space.24)-1rem)]">
      <div className="flex h-80 max-h-[1080px] max-w-[960px] overflow-hidden shadow-xl lg:absolute lg:left-0 lg:h-full lg:w-1/2 lg:rounded-br-2xl">
        <RSVMap geometry={geometry} />
      </div>
      <div className=" mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {meta.general.name}
          </h2>
          <h2 className="mt-6 text-lg font-bold text-gray-500">Kurzfassung</h2>
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
        </div>
      </div>
    </div>
  );
};
