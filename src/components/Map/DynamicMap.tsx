import {
  bbox,
  bboxPolygon,
  geojsonType,
  square,
  transformScale,
} from '@turf/turf';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useEffect, useState } from 'react';
import Map, { FullscreenControl } from 'react-map-gl/maplibre';
import { maptilerBaseUrl, maptilerKey } from '~/utils';
import { RSVPopup, RSVSegment } from '.';

type BBox2d = [number, number, number, number];

function assertFeatureCollection(
  geojson: any
): asserts geojson is GeoJSON.FeatureCollection<GeoJSON.MultiLineString> {
  geojsonType(geojson, 'FeatureCollection', 'DynamicMap');
}

export const DynamicMap: React.FC<
  Pick<Queries.SteckbriefQuery, 'geometry'>
> = ({ geometry }) => {
  assertFeatureCollection(geometry);
  // the factor by which the bbox is scaled to the viewport
  const scaleFactor = 4;
  const bboxView = bbox(
    transformScale(bboxPolygon(square(geometry.bbox)), scaleFactor)
  );
  const [info] = useState({
    lng: 0,
    lat: 0,
    properties: null,
  });
  const [selected, setSelected] = useState(undefined);
  // disabled until popup has real content
  // const updateInfo = (event) => {
  //   const { lng, lat } = event.lngLat;
  //   const [{ properties }] = event.features;
  //   setInfo({ lng, lat, properties });
  //   setSelected(properties.id);
  // };
  // const [cursorStyle, setCursorStyle] = useState('grab');

  const [isScreenHorizontal, setIsScreenHorizontal] = useState(false);

  useEffect(() => {
    // reminder: hard coded breakpoint lg tailwind css - has to be changed if tailwind.config.ts is changed
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');
    function onMediaQueryChange({ matches }) {
      setIsScreenHorizontal(matches);
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <Map
      initialViewState={{
        bounds: geometry.bbox as BBox2d,
        fitBoundsOptions: {
          padding: 20,
        },
      }}
      mapStyle={`${maptilerBaseUrl}/style.json?key=${maptilerKey}`}
      maxBounds={bboxView as BBox2d}
      attributionControl={false}
      scrollZoom={isScreenHorizontal}
      interactiveLayerIds={geometry.features.map(
        ({ properties }) => properties.id
      )}

      // disabled until popup has real content
      // onClick={updateInfo}
      // cursor={cursorStyle}
      // onMouseEnter={() => setCursorStyle('pointer')}
      // onMouseLeave={() => setCursorStyle('grab')}
    >
      <FullscreenControl style={{ background: '#D9D9D9' }} />
      {geometry.features.map(
        (feature: Queries.SteckbriefQuery['geometry']['features'][number]) => (
          <RSVSegment
            key={feature.properties.id}
            feature={feature}
            selected={selected}
          />
        )
      )}
      <RSVPopup info={info} selected={selected} setSelected={setSelected} />
    </Map>
  );
};
