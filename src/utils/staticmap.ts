import { encode } from '@googlemaps/polyline-codec';
import { maptilerBaseUrl, maptilerKey } from './mapTiler.const';

// TODO: source from .const to stay consistent with ~/components/Map/DynamicMap.tsx
const stateColor = {
  idea: '#A7F3D0',
  agreement_process: '#6EE7B7',
  planning: '#10B981',
  in_progress: '#047857',
  done: '#064E3B',
  discarded: '#000000',
};

const buildPaths = ({
  properties: { state },
  geometry: { coordinates },
}: GeoJSON.Feature<GeoJSON.MultiLineString>) => {
  const paint = { width: 7, stroke: stateColor[state] };
  const paintArr = Object.keys(paint).map((key) => `${key}:${paint[key]}`);

  // flip the coordinate order for encoding
  return coordinates
    .map((linestring) =>
      encode(linestring.map((position) => [...position].reverse()))
    )
    .map((polyline) => [...paintArr, `enc:${polyline}`].join('|'));
};

export const staticMapRequest = (
  { features, bbox }: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>,
  [width, height]: number[]
) => {
  const dims = `${width / 2}x${height / 2}@2x.png`;

  // URL and Keys: https://cloud.maptiler.com/maps/a4824657-3edd-4fbd-925e-1af40ab06e9c/static
  const url = new URL(`${maptilerBaseUrl}/static/${bbox.toString()}/${dims}`);
  url.searchParams.append('key', maptilerKey);
  url.searchParams.append('attribution', '0');
  features
    .filter((feature) => !feature.properties.discarded)
    .forEach((feature) => {
      buildPaths(feature).forEach((path) => {
        url.searchParams.append('path', path);
      });
    });
  return url;
};
