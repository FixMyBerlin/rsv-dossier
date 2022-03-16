import React from 'react';
import { MapIcon } from '@heroicons/react/outline';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { BMDVFunding } from '~/components/Layout/BMDVFunding';
import Map, { Source, Layer, NavigationControl, useMap } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { LineLayer, CircleLayer } from 'mapbox-gl';

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
  radschnellweg: {
    ref: string;
    name: string;
    website: string;
    status: string;
    to: string;
    from: string;
    finished?: string;
    costs?: number;
    coordinates: Array<Array<number>>;
  };
};

const summary =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

const geojson: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [8.36527, 49.39233],
          [8.36593, 49.39248],
          [8.36633, 49.39243],
          [8.36687, 49.39269],
          [8.36769, 49.39305],
          [8.36797, 49.39317],
          [8.36952, 49.39401],
          [8.369859, 49.39425],
          [8.37038, 49.39447],
          [8.371729, 49.39481],
          [8.37255, 49.39492],
          [8.37322, 49.39493],
          [8.37345, 49.39494],
          [8.37434, 49.3951],
          [8.37442, 49.39515],
          [8.374459, 49.39595],
          [8.37451, 49.39607],
          [8.37452, 49.39621],
          [8.37451, 49.39635],
          [8.37448, 49.39658],
          [8.374459, 49.39705],
          [8.37444, 49.39821],
          [8.374449, 49.39837],
          [8.37448, 49.39843],
          [8.3744, 49.39852],
          [8.37438, 49.39903],
          [8.374359, 49.39954],
          [8.37429, 49.40017],
          [8.37407, 49.40076],
          [8.373839, 49.40135],
          [8.37334, 49.40235],
          [8.37331, 49.40256],
          [8.373419, 49.40276],
          [8.37351, 49.40283],
          [8.37373, 49.4031],
          [8.37392, 49.40333],
          [8.3742, 49.40347],
          [8.3747, 49.40368],
          [8.37484, 49.40377],
          [8.37533, 49.40444],
          [8.37601, 49.4055],
          [8.376289, 49.40604],
          [8.37646, 49.40633],
        ],
      },
      properties: {},
    },
  ],
};

const layerStyle: LineLayer = {
  id: 'rsv',
  type: 'line',
  paint: {
    'line-width': 10,
    'line-color': '#000000',
  },
};

export const RSVDetails: React.VFC<Props> = (props) => {
  const { radschnellweg } = props;
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
          <Source id="rsv" type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>
          <NavigationControl />
        </Map>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {radschnellweg.ref && `${radschnellweg.ref}: `} {radschnellweg.from}{' '}
            &rarr; {radschnellweg.to}
          </h2>
          <h2 className="mt-6 text-lg font-bold text-gray-500">Kurzfassung</h2>
          <p className="text-lg text-gray-500">{summary}</p>
          <div className="mt-4 rounded-full">
            <ButtonLink
              to={radschnellweg.website}
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
