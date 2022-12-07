import {
  bbox,
  bboxPolygon,
  geojsonType,
  square,
  transformScale,
} from '@turf/turf';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import React, { useState } from 'react';
import Map from 'react-map-gl';
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
      interactiveLayerIds={geometry.features.map(
        ({ properties }) => properties.id
      )}
      // disabled until popup has real content
      // onClick={updateInfo}
      // cursor={cursorStyle}
      // onMouseEnter={() => setCursorStyle('pointer')}
      // onMouseLeave={() => setCursorStyle('grab')}
    >
      {geometry.features
        .filter(
          (feature: GeoJSON.Feature<GeoJSON.MultiLineString>) =>
            !feature.properties.discarded
        )
        .map((feature: GeoJSON.Feature<GeoJSON.MultiLineString>) => (
          <RSVSegment
            key={feature.properties.id}
            feature={feature}
            selected={selected}
          />
        ))}
      <RSVPopup info={info} selected={selected} setSelected={setSelected} />
    </Map>
  );
};
