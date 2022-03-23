import React from 'react';
import { LineLayer, LineLayout } from 'mapbox-gl';
import { Source, Layer } from 'react-map-gl';

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

const layout: LineLayout = { 'line-cap': 'round', 'line-join': 'round' };

export const RSVSegment: React.VFC<Props> = ({ feature, selected }) => {
  const { id } = feature.properties;
  const layerStyle: LineLayer = {
    id,
    type: 'line',
    layout,
    paint: {
      'line-blur': 0.7,
      'line-color': stateColors[feature.properties.state],
      'line-opacity': selected === id ? 1 : 0.8,
      'line-width': selected === id ? 7 : 6,
    },
  };
  return (
    <Source id={id} type="geojson" data={feature}>
      <Layer {...layerStyle} />
    </Source>
  );
};
