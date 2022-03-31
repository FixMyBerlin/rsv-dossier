import React, { useState } from 'react';
import Map from 'react-map-gl';
import maplibregl, { LngLatBoundsLike } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RSVSegment } from './RSVSegment';
import { RSVPopup } from './RSVPopup';
import { MapTilerOptIn } from '~/components/Consent/';

type Props = {
  geometry: {
    bbox: [number, number, number, number];
    features: Array<GeoJSON.Feature>;
  };
};

// bbox of germany (slightly extended)
const mapBounds: LngLatBoundsLike = [
  4.98865807458, 47.3024876979, 16.0169958839, 54.983104153,
];

export const RSVMap: React.VFC<Props> = ({ geometry }) => {
  const [info, setInfo] = useState({
    lng: 0,
    lat: 0,
    properties: null,
  });
  const [selected, setSelected] = useState(undefined);
  const updateInfo = (event) => {
    const { lng, lat } = event.lngLat;
    const [{ properties }] = event.features;
    setInfo({
      lng,
      lat,
      properties: properties,
    });
    setSelected(properties.id);
  };
  const [consent, setConsent] = useState(
    new Date(localStorage.getItem('MAPTILER_CONSENT') || undefined) < new Date()
  );
  if (consent) {
    return (
      <Map
        initialViewState={{
          zoom: 8,
          bounds: geometry.bbox,
        }}
        mapLib={maplibregl}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        maxBounds={mapBounds}
        onClick={updateInfo}
        interactiveLayerIds={geometry.features.map(
          ({ properties }) => properties.id
        )}
      >
        {geometry.features.map((feature) => {
          return <RSVSegment feature={feature} selected={selected} />;
        })}
        <RSVPopup info={info} selected={selected} setSelected={setSelected} />
      </Map>
    );
  }
  return <MapTilerOptIn setConsent={setConsent} />;
};
