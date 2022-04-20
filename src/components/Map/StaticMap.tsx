import React from 'react';
import { encode } from '@googlemaps/polyline-codec';
import 'maplibre-gl/dist/maplibre-gl.css';

const MAPTILER_BASEURL = process.env.MAPTILER_BASEURL;
const MAPTILER_KEY = process.env.MAPTILER_KEY;
const [width, height] = [1920, 1080];

type Props = {
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
};

const stateColor = {
  idea: '#A7F3D0',
  agreed: '#6EE7B7',
  planning: '#10B981',
  in_progress: '#047857',
  done: '#064E3B',
};

const buildPath = ({
  properties: { state },
  geometry: { coordinates },
}: GeoJSON.Feature<GeoJSON.MultiLineString>) => {
  const paint = `width:7|stroke:${stateColor[state]}`;

  return coordinates
    .map((linestring) =>
      encode(linestring.map((latlng) => [...latlng].reverse()))
    )
    .map((polyline) => `${paint}|enc:${polyline}`);
};

export const StaticMap: React.FC<Props> = ({
  geometry: { features, bbox },
}) => {
  const format = `${width}x${height}.png`;
  const url = new URL(
    `${MAPTILER_BASEURL}/static/${bbox.toString()}/${format}`
  );
  url.searchParams.append('key', MAPTILER_KEY);
  features.forEach((feature) => {
    buildPath(feature).forEach((path) => {
      url.searchParams.append('path', path);
    });
  });
  return <img src={url.toString()} alt="static map" />;
};
