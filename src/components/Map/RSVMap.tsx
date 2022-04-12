import React, { useEffect, useState } from 'react';
import Map from 'react-map-gl';
import maplibregl, { LngLatBoundsLike } from 'maplibre-gl';
import { StaticImage } from 'gatsby-plugin-image';
import 'maplibre-gl/dist/maplibre-gl.css';
import { getOptInCookie, OptIn } from '~/components/CookieConsent/';
import { RSVSegment } from './RSVSegment';
import { RSVPopup } from './RSVPopup';

type Props = {
  geometry: {
    bbox: [number, number, number, number];
    features: Array<GeoJSON.Feature>;
  };
};

// (slightly extended)
const bboxGermany: LngLatBoundsLike = [
  4.98865807458, 47.3024876979, 16.0169958839, 54.983104153,
];

export const RSVMap: React.VFC<Props> = ({ geometry }) => {
  const [info, setInfo] = useState({
    lng: 0,
    lat: 0,
    properties: null,
  });
  const [cursorStyle, setCursorStyle] = useState('grab');
  const [selected, setSelected] = useState(undefined);
  const updateInfo = (event) => {
    const { lng, lat } = event.lngLat;
    const [{ properties }] = event.features;
    setInfo({ lng, lat, properties });
    setSelected(properties.id);
  };
  const [consent, setConsent] = useState<boolean | null>(null);
  useEffect(() => setConsent(getOptInCookie()));
  if (!consent) {
    return (
      <div className="relative">
        {consent === false && (
          <div className="absolute top-1/2 z-10 mx-2 -translate-y-1/2">
            <OptIn setConsent={setConsent} />
          </div>
        )}
        <StaticImage
          src="./map.png"
          alt="Accept the Privacy Policy to view the map"
        />
      </div>
    );
  }
  return (
    <Map
      initialViewState={{
        bounds: geometry.bbox,
      }}
      mapLib={maplibregl}
      cursor={cursorStyle}
      mapStyle="https://api.maptiler.com/maps/a4824657-3edd-4fbd-925e-1af40ab06e9c/style.json?key=ECOoUBmpqklzSCASXxcu"
      maxBounds={bboxGermany}
      onClick={updateInfo}
      interactiveLayerIds={geometry.features.map(
        ({ properties }) => properties.id
      )}
      onMouseEnter={() => setCursorStyle('pointer')}
      onMouseLeave={() => setCursorStyle('grab')}
      attributionControl={false}
    >
      {geometry.features.map((feature) => {
        return <RSVSegment feature={feature} selected={selected} />;
      })}
      <RSVPopup info={info} selected={selected} setSelected={setSelected} />
    </Map>
  );
};
