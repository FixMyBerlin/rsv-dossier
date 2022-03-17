import React from 'react';
import { MapIcon } from '@heroicons/react/outline';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { BMDVFunding } from '~/components/Layout/BMDVFunding';
import Map, { Source, Layer, NavigationControl } from 'react-map-gl';
import maplibregl, { LngLatBoundsLike } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { LineLayer } from 'mapbox-gl';

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
      geometry: GeoJSON.Geometry;
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

const colors = [
  '#e6194B',
  '#3cb44b',
  '#ffe119',
  '#4363d8',
  '#f58231',
  '#911eb4',
  '#42d4f4',
  '#f032e6',
  '#bfef45',
  '#fabed4',
  '#469990',
  '#dcbeff',
  '#9A6324',
  '#fffac8',
  '#800000',
  '#aaffc3',
  '#808000',
  '#ffd8b1',
  '#000075',
];

const mapBounds: LngLatBoundsLike = [
  4.98865807458, 47.3024876979, 16.0169958839, 54.983104153,
];
function bounds(geometries) {
  let [maxLat, maxLon] = [-Infinity, -Infinity];
  let [minLat, minLon] = [Infinity, Infinity];
  geometries.nodes.forEach(({ geometry: { coordinates } }) => {
    coordinates.forEach((line) => {
      const Xs = line.map((x) => x[1]);
      const Ys = line.map((x) => x[0]);
      maxLat = Math.max(...Xs, maxLat);
      maxLon = Math.max(...Ys, maxLon);
      minLat = Math.min(...Xs, minLat);
      minLon = Math.min(...Ys, minLon);
    });
  });
  return [minLat, minLon, maxLat, maxLon];
}
function center(geometries) {
  const [minLat, minLon, maxLat, maxLon] = bounds(geometries);
  return [minLon / 2 + maxLon / 2, minLat / 2 + maxLat / 2];
}

export const RSVDetails: React.VFC<Props> = ({ meta, geometries }) => {
  const [lon, lat] = center(geometries);
  return (
    <div className="relative bg-white">
      <div className="h-56 rounded-br-2xl bg-emerald-300 shadow-xl sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <Map
          initialViewState={{
            longitude: lon,
            latitude: lat,
            zoom: 8,
          }}
          mapLib={maplibregl}
          style={{ display: 'cover', borderRadius: '0 0 1rem' }}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
          maxBounds={mapBounds}
        >
          {geometries.nodes.map((geom, index) => {
            const layerStyle: LineLayer = {
              id: geom.properties.id_segment,
              type: 'line',
              paint: {
                'line-width': 6,
                'line-color': colors[index % colors.length],
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
