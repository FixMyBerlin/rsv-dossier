import React from 'react';
import { encode } from '@googlemaps/polyline-codec';
import 'maplibre-gl/dist/maplibre-gl.css';

const MAPTILER_BASEURL = process.env.MAPTILER_BASEURL;
const MAPTILER_KEY = process.env.MAPTILER_KEY;
const [width, height] = [960, 540];

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
  // const paint = `width:7|stroke:${stateColor[state]}`;
  const paint = 'width:7|stroke:green';

  return coordinates
    .map((linestring) =>
      encode(linestring.map((latlng) => [...latlng].reverse()))
    )
    .map((polyline) => `path=${paint}|enc:${polyline}`)
    .join('&');
};

export const StaticMap: React.FC<Props> = ({
  geometry: { features, bbox },
}) => {
  const paths = features.map(buildPath).join('&');
  const format = `${width}x${height}.png`;
  const url = `${MAPTILER_BASEURL}/static/${bbox.toString()}/${format}?key=${MAPTILER_KEY}&${paths}`;
  return <img src={url} alt="static map" />;
};
