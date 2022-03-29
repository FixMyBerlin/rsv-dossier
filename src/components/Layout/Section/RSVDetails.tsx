import React, { useState } from 'react';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { BMDVFunding } from '~/components/Layout/BMDVFunding';
import Map from 'react-map-gl';
import maplibregl, { LngLatBoundsLike } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { RSVSegment } from './RSVSegment';
import { RSVPopup } from './RSVPopup';

type Props = {
  meta: {
    finished: string;
    state: string;
    cost: string;
    general: {
      name: string;
      description: string;
      to: string;
      from: string;
      ref: string;
    };
    references: {
      website: string;
    };
  };
  geometry: {
    bbox: [number, number, number, number];
    features: Array<GeoJSON.Feature>;
  };
};

const mapBounds: LngLatBoundsLike = [
  4.98865807458, 47.3024876979, 16.0169958839, 54.983104153,
];

export const RSVDetails: React.VFC<Props> = ({ meta, geometry }) => {
  const [info, setInfo] = useState({
    lng: 0,
    lat: 0,
    properties: null,
  });
  const [selected, setSelected] = useState(-1);

  const updateInfo = (event) => {
    const { lng, lat } = event.lngLat;
    const [feature] = event.features;
    setInfo({
      lng,
      lat,
      properties: feature.properties,
    });
    setSelected(feature.properties.id);
  };

  return (
    <div className="relative bg-white">
      <div className="h-56 overflow-hidden bg-emerald-300 shadow-xl sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2 lg:rounded-br-2xl">
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
          {selected !== -1 && (
            <RSVPopup info={info} setSelected={setSelected} />
          )}
        </Map>
      </div>
      <div className=" mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {meta.general.name}
          </h2>
          <h2 className="mt-6 text-lg font-bold text-gray-500">Kurzfassung</h2>
          <p className="text-lg text-gray-500">{meta.general.description}</p>
          {meta.references.website && (
            <div className="mt-4 rounded-full">
              <ButtonLink
                to={meta.references.website}
                className="btn-brand-outline px-8 py-3 shadow md:text-lg"
              >
                Projektwebsite
              </ButtonLink>
            </div>
          )}
          <div>
            <BMDVFunding />
          </div>
        </div>
      </div>
    </div>
  );
};
