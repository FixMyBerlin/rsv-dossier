import React from 'react';
import { LineLayer, LineLayout } from 'mapbox-gl';
import { geojsonType } from '@turf/turf';
import { Source, Layer } from 'react-map-gl';
import { segmentColor } from '~/utils';

// const stateColor = {
//   idea: '#A7F3D0',
//   agreement_process: '#6EE7B7',
//   planning: '#10B981',
//   in_progress: '#047857',
//   done: '#064E3B',
//   discarded: '#000000',
// };

// const selectedColor = '#475569';

type Props = {
  // feature: GeoJSON.Feature<GeoJSON.MultiLineString>;
  feature: Queries.SteckbriefQuery['geometry']['features'][number];
  selected?: number;
};

function assertFeature(
  geojson: any
): asserts geojson is GeoJSON.Feature<GeoJSON.MultiLineString> {
  geojsonType(geojson, 'Feature', 'DynamicMap');
}

export const RSVSegment: React.FC<Props> = ({ feature }) => {
  assertFeature(feature);
  const layout: LineLayout = {
    'line-cap': 'round',
    'line-join': 'round',
  };
  const { id } = feature.properties;
  const paint = {
    'line-color': segmentColor(feature.properties.discarded),
    'line-width': 4,
    'line-dasharray':
      feature.properties.variant === 'Alternative' &&
      !feature.properties.discarded
        ? [1, 2]
        : [1],
  };
  // const paint =
  //   selected === id
  //     ? {
  //         'line-color': selectedColor,
  //         'line-width': 7,
  //       }
  //     : {
  //         'line-color': stateColor[feature.properties.state],
  //         'line-width': 6,
  //       };

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
