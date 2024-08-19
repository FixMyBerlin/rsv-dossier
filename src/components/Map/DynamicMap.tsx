import { bbox, bboxPolygon, geojsonType, square, transformScale } from '@turf/turf'

import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import React, { useEffect, useState } from 'react'
import Map, { FullscreenControl, NavigationControl } from 'react-map-gl/maplibre'

import type { GeometrySchema } from 'data/schema/geometry.schema'
import { maptilerBaseUrl, maptilerKey } from 'src/utils/mapTiler.const'
import { RSVSegment } from './RsvSegment'

type BBox2d = [number, number, number, number]

function assertFeatureCollection(
  geojson: any,
): asserts geojson is GeoJSON.FeatureCollection<GeoJSON.MultiLineString> {
  geojsonType(geojson, 'FeatureCollection', 'DynamicMap')
}
type Props = {
  geometry: GeometrySchema
}

export const DynamicMap: React.FC<Props> = ({ geometry }) => {
  assertFeatureCollection(geometry)
  // the factor by which the bbox is scaled to the viewport
  const scaleFactor = 4
  const bboxView = geometry.bbox
    ? bbox(transformScale(bboxPolygon(square(geometry.bbox)), scaleFactor))
    : undefined

  const [selected] = useState(undefined)

  const [isScreenHorizontal, setIsScreenHorizontal] = useState(false)

  useEffect(() => {
    // reminder: hard coded breakpoint lg tailwind css - has to be changed if tailwind.config.ts is changed
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')
    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setIsScreenHorizontal(matches)
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <Map
        initialViewState={{
          bounds: geometry.bbox as BBox2d,
          fitBoundsOptions: {
            padding: 20,
          },
        }}
        mapLib={maplibregl}
        mapStyle={`${maptilerBaseUrl}/style.json?key=${maptilerKey}`}
        maxBounds={bboxView as BBox2d}
        attributionControl={false}
        scrollZoom={isScreenHorizontal}
        interactiveLayerIds={geometry.features.map(({ properties }) => properties.id)}
      >
        <FullscreenControl style={{ background: '#D9D9D9' }} />
        {geometry.features.map((feature: GeometrySchema['features'][number]) => (
          <RSVSegment key={feature.properties.id} feature={feature} selected={selected} />
        ))}
        <NavigationControl showCompass={false} />
      </Map>
    </div>
  )
}
