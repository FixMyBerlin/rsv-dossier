import React from 'react';
import { encode, polylineEncodeLine } from '@googlemaps/polyline-codec';
import 'maplibre-gl/dist/maplibre-gl.css';
import { geometryJson } from '~/types/steckbrief';

const baseMap =
  'https://api.maptiler.com/maps/a4824657-3edd-4fbd-925e-1af40ab06e9c';
const maptilerKey = 'ECOoUBmpqklzSCASXxcu';
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
  const url = `${baseMap}/static/${bbox.toString()}/${format}?key=${maptilerKey}&${paths}`;
  return <img src={url} alt="static map" />;
};
