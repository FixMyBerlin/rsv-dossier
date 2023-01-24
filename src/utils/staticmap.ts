import { encode } from '@googlemaps/polyline-codec';
import { segmentColor } from '.';
import { maptilerBaseUrl, maptilerKey } from './mapTiler.const';

// TODO: source from .const to stay consistent with ~/components/Map/DynamicMap.tsx

const buildPaths = ({
  properties,
  geometry: { coordinates },
}: GeoJSON.Feature<GeoJSON.MultiLineString>) => {
  const paint = { width: 5, stroke: segmentColor(properties as any) };
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

  // URL and Keys: ~/utils/mapTiler.const.ts
  const url = new URL(`${maptilerBaseUrl}/static/${bbox.toString()}/${dims}`);
  url.searchParams.append('key', maptilerKey);
  url.searchParams.append('attribution', '0');
  features.forEach((feature) => {
    buildPaths(feature).forEach((path) => {
      url.searchParams.append('path', path);
    });
  });
  return url;
};
