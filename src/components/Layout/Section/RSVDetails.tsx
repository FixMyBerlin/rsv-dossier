import React from 'react';
import { MapIcon } from '@heroicons/react/outline';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { BMDVFunding } from '~/components/Layout/BMDVFunding';
import Map, { Source, Layer, NavigationControl, useMap } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { LineLayer, CircleLayer, MercatorCoordinate } from 'mapbox-gl';

const statsIcons = {
  costs: <MapIcon className="h-6 w-6" aria-hidden="true" />,
  length: <MapIcon className="h-6 w-6" aria-hidden="true" />,
  community: <MapIcon className="h-6 w-6" aria-hidden="true" />,
  duration: <MapIcon className="h-6 w-6" aria-hidden="true" />,
};

const stats = {
  costs: 'Kosten',
  length: 'Länge',
  community: 'Gemeinde',
  duration: 'Zeitraum',
};

type Props = {
  meta: {
    finished: string;
    state: string;
    cost: string;
    general: {
      name: string;
      description: string;
      to: string;
      from: string;
      ref: string;
    };
    references: {
      website: string;
    };
  };
  geometries: {
    nodes: Array<{
      id: string;
      type: 'Feature';
      geometry: {
        type: string;
        coordinates: Array<Array<number>>;
      };
      properties: {
        id_rsv: string;
        id_segment: string;
        length: string;
        planning_phase: string;
        status: string;
        variants: string;
        detail_level: string;
      };
    }>;
  };
};

const lineWidth = 10;

export const RSVDetails: React.VFC<Props> = ({ meta, geometries }) => {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-emerald-300 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <Map
          initialViewState={{
            longitude: 8.3,
            latitude: 49.4,
            zoom: 8,
          }}
          mapLib={maplibregl}
          style={{ display: 'cover' }}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
          {geometries.nodes.map((geom) => {
            const layerStyle: LineLayer = {
              id: geom.properties.id_segment,
              type: 'line',
              paint: {
                'line-width': 10,
                'line-color': '#000000',
              },
            };
            return (
              <Source
                id={geom.properties.id_segment}
                type="geojson"
                data={geom}
              >
                <Layer {...layerStyle} />
              </Source>
            );
          })}

          <NavigationControl />
        </Map>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {meta.general.name}
          </h2>
          <h2 className="mt-6 text-lg font-bold text-gray-500">Kurzfassung</h2>
          <p className="text-lg text-gray-500">{meta.general.description}</p>
          <div className="mt-4 rounded-full">
            <ButtonLink
              to={meta.references.website}
              className="btn-brand-outline px-8 py-3 shadow md:text-lg"
            >
              Projektwebsite
            </ButtonLink>
          </div>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              {Object.keys(stats).map((stat) => (
                <div className="flex flex-col px-8 pt-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
                    {statsIcons[stat]}
                  </div>
                  <dt className="mt-3 text-base font-medium text-gray-500">
                    {stats[stat]}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <BMDVFunding />
          </div>
        </div>
      </div>
    </div>
  );
};
