import React, { useState } from 'react';
import Map from 'react-map-gl';
import maplibregl, { LngLatBoundsLike } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RSVSegment, RSVPopup } from '.';

type Props = {
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
};

// (slightly extended)
const bboxGermany: LngLatBoundsLike = [
  4.98865807458, 47.3024876979, 16.0169958839, 54.983104153,
];

// somehow can't use object destructuring here
/* eslint-disable prefer-destructuring */
const GATSBY_MAPTILER_BASEURL = process.env.GATSBY_MAPTILER_BASEURL;
const GATSBY_MAPTILER_KEY = process.env.GATSBY_MAPTILER_KEY;

export const DynamicMap: React.FC<Props> = ({ geometry }) => {
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
        bounds: geometry.bbox as LngLatBoundsLike,
        fitBoundsOptions: {
          padding: 20,
        },
      }}
      mapLib={maplibregl}
      mapStyle={`${GATSBY_MAPTILER_BASEURL}/style.json?key=${GATSBY_MAPTILER_KEY}`}
      maxBounds={bboxGermany}
      interactiveLayerIds={geometry.features.map(
        ({ properties }) => properties.id
      )}
      // disabled until popup has real content
      // onClick={updateInfo}
      // cursor={cursorStyle}
      // onMouseEnter={() => setCursorStyle('pointer')}
      // onMouseLeave={() => setCursorStyle('grab')}
    >
      {geometry.features.map((feature) => (
        <RSVSegment key={feature.id} feature={feature} selected={selected} />
      ))}
      <RSVPopup info={info} selected={selected} setSelected={setSelected} />
    </Map>
  );
};
