import React from 'react';
import { LineLayer, LineLayout, LinePaint } from 'mapbox-gl';
import Map, { Source, Layer, Popup } from 'react-map-gl';
import { GeoJSON } from 'geojson';

const stateColors = {
  idea: '#ffe119',
  agreed: '#4363d8',
  planning: '#f58231',
  in_progress: '#dcbeff',
  done: '#800000',
};

type Props = {
  feature: GeoJSON.Feature;
  selected: number;
};

const paint: LinePaint = {
  'line-width': 6,
  'line-blur': 0.7,
};
const layout: LineLayout = { 'line-cap': 'round', 'line-join': 'round' };

export const RSVSegment: React.VFC<Props> = ({ feature, selected }) => {
  const id = feature.properties.id;
  const layerStyle: LineLayer = {
    id: id,
    type: 'line',
    layout,
    paint: {
      ...paint,
      'line-color': stateColors[feature.properties.state],
      'line-opacity': selected == id ? 1 : 0.65,
    },
  };
  return (
    <Source id={id} type="geojson" data={feature}>
      <Layer {...layerStyle} />
    </Source>
  );
};
