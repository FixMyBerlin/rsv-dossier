import React, { useEffect, useState } from 'react';
import Map from 'react-map-gl';
import maplibregl, { LngLatBounds, LngLatBoundsLike } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RSVSegment, RSVPopup } from '.';

type Props = {
  geometry: GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
};

// (slightly extended)
const bboxGermany: LngLatBoundsLike = [
  4.98865807458, 47.3024876979, 16.0169958839, 54.983104153,
];

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
        bounds: geometry.bbox,
        fitBoundsOptions: {
          padding: 20,
        },
      }}
      mapLib={maplibregl}
      mapStyle="https://api.maptiler.com/maps/a4824657-3edd-4fbd-925e-1af40ab06e9c/style.json?key=ECOoUBmpqklzSCASXxcu"
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
      {geometry.features.map((feature) => {
        return (
          <RSVSegment key={feature.id} feature={feature} selected={selected} />
        );
      })}
      <RSVPopup info={info} selected={selected} setSelected={setSelected} />
    </Map>
  );
};
