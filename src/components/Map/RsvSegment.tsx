import React from 'react';
import { geojsonType } from '@turf/turf';
import { Source, Layer } from 'react-map-gl/maplibre';
import type { LineLayer } from 'react-map-gl/maplibre';
import { segmentColor } from '~/utils';

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
  const { id } = feature.properties;
  const paint = {
    'line-color': segmentColor(feature.properties),
    'line-width': 4,
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
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
    },
    paint,
    source: id,
  };
  return (
    <Source id={id} type="geojson" data={feature}>
      <Layer {...layerStyle} beforeId="park-label" />
    </Source>
  );
};
