import React from 'react';
import { LineLayer, LineLayout } from 'mapbox-gl';
import { Source, Layer } from 'react-map-gl';

const stateColor = {
  idea: '#A7F3D0',
  agreement_process: '#6EE7B7',
  planning: '#10B981',
  in_progress: '#047857',
  done: '#064E3B',
  discarded: '#000000',
};

const selectedColor = '#475569';

type Props = {
  feature: GeoJSON.Feature<GeoJSON.MultiLineString>;
  selected: number;
};

const layout: LineLayout = {
  'line-cap': 'round',
  'line-join': 'round',
};

export const RSVSegment: React.FC<Props> = ({ feature, selected }) => {
  const { id } = feature.properties;
  const paint =
    selected === id
      ? {
          'line-color': selectedColor,
          'line-width': 7,
        }
      : {
          'line-color': stateColor[feature.properties.state],
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
      <Layer {...layerStyle} beforeId="place_hamlet" />
    </Source>
  );
};
