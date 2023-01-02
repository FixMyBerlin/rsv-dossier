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
import Map, { FullscreenControl } from 'react-map-gl';
import { maptilerBaseUrl, maptilerKey } from '~/utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import resolveConfig from 'tailwindcss/resolveConfig';
import { RSVPopup, RSVSegment } from '.';
import tailwindConfig from '../../../tailwind.config';

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

  // eslint-disable-next-line prefer-const
  let [isScreenHorizontal, setIsScreenHorizontal] = useState(false);

  useEffect(() => {
    // https://tailwindcss.com/docs/configuration: Note that this will transitively pull in a lot of our build-time dependencies, resulting in bigger client-side bundle size. To avoid this, we recommend using a tool like babel-plugin-preval to generate a static version of your configuration at build-time.
    // eslint-disable-next-line prefer-const
    let lgMediaQuery = window.matchMedia(
      `(min-width: ${resolveConfig(tailwindConfig).theme.screens.lg})`
    );
    // fullConfig.theme.screens.lg;
    // => '1024px'

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
      mapLib={maplibregl}
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
