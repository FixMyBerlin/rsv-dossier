import { geojsonType } from '@turf/turf'
import type { GeometrySchema } from 'data/schema/geometry.schema'

import type { LineLayerSpecification } from 'maplibre-gl'
import React from 'react'
import { Layer, Source } from 'react-map-gl'

import { segmentColor } from 'src/utils/mapColors'

// const selectedColor = '#475569';

type Props = {
  // feature: GeoJSON.Feature<GeoJSON.MultiLineString>;
  feature: GeometrySchema['features'][number]
  selected?: number
}

function assertFeature(geojson: any): asserts geojson is GeoJSON.Feature<GeoJSON.MultiLineString> {
  geojsonType(geojson, 'Feature', 'DynamicMap')
}

export const RSVSegment: React.FC<Props> = ({ feature }) => {
  assertFeature(feature)
  const layout: LineLayerSpecification['layout'] = {
    'line-cap': 'round',
    'line-join': 'round',
  }
  const { id } = feature.properties
  const paint: LineLayerSpecification['paint'] = {
    'line-color': segmentColor(feature.properties),
    'line-width': 4,
  }
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

  const layerStyle = {
    id,
    type: 'line',
    layout,
    paint,
  }
  return (
    <Source id={id} type="geojson" data={feature}>
      {/* @ts-expect-error todo */}
      <Layer {...layerStyle} beforeId="park-label" />
    </Source>
  )
}
