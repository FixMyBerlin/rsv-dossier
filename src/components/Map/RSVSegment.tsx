import React from 'react';
import { LineLayer, LineLayout } from 'mapbox-gl';
import { Source, Layer } from 'react-map-gl';
// import colors from 'tailwindcss/colors';

// const stateColor = {
//   idea: colors.emerald[900],
//   agreed: colors.emerald[700],
//   planning: colors.emerald[500],
//   in_progress: colors.emerald[300],
//   done: colors.emerald[100],
// };

const stateColor = {
  idea: '#A7F3D0',
  agreed: '#6EE7B7',
  planning: '#10B981',
  in_progress: '#047857',
  done: '#064E3B',
};

const selectedColor = '#475569';

type Props = {
  feature: GeoJSON.Feature;
  selected: number;
};

const layout: LineLayout = { 'line-cap': 'round', 'line-join': 'round' };

export const RSVSegment: React.FC<Props> = ({ feature, selected }) => {
  const { id } = feature.properties;
  const paint =
    selected === id
      ? {
          'line-blur': 0.9,
          'line-color': selectedColor,
          'line-opacity': 1,
          'line-width': 7,
        }
      : {
          'line-blur': 0.7,
          'line-color': stateColor[feature.properties.state],
          'line-opacity': 0.8,
          'line-width': 6,
        };

  const layerStyle: LineLayer = {
    id,
    type: 'line',
    layout,
    paint,
  };
  return (
    <Source id={id} type="geojson" data={feature}>
      <Layer {...layerStyle} />
    </Source>
  );
};
