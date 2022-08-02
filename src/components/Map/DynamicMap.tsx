import React, { useState } from 'react';
import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { transformScale, bboxPolygon, bbox, square } from '@turf/turf';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RSVSegment, RSVPopup } from '.';

type Props = {
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
};
type BBox2d = [number, number, number, number];

// somehow can't use object destructuring here
/* eslint-disable prefer-destructuring */
const GATSBY_MAPTILER_BASEURL = process.env.GATSBY_MAPTILER_BASEURL;
const GATSBY_MAPTILER_KEY = process.env.GATSBY_MAPTILER_KEY;

export const DynamicMap: React.FC<Props> = ({ geometry }) => {
  const bboxView = bbox(
    transformScale(bboxPolygon(square(geometry.bbox)), 6)
  ) as BBox2d;
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
      mapStyle={`${GATSBY_MAPTILER_BASEURL}/style.json?key=${GATSBY_MAPTILER_KEY}`}
      maxBounds={bboxView}
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
      {
        geometry.features.map((feature) => (
          <RSVSegment
            key={`${
              feature.properties.id_rsv
            }_${feature.properties.length.toString()}`}
            feature={feature}
            selected={selected}
          />
        ))
        // TODO: use id as key instead of length and name
      }
      <RSVPopup info={info} selected={selected} setSelected={setSelected} />
    </Map>
  );
};
