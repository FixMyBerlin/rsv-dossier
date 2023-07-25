import React from 'react';
import { Popup } from 'react-map-gl/maplibre';

type Props = {
  info: {
    lng: number;
    lat: number;
    properties?: {
      variants: Array<string>;
      state: string;
      planning_phase: string;
      length: string;
      id_rsv: string;
      id: string;
      detail_level: string;
    };
  };
  selected?: number;
  setSelected: (selected?: number) => void;
};

export const RSVPopup: React.FC<Props> = ({ info, selected, setSelected }) => {
  return (
    <div>
      {selected && (
        <Popup
          className="opacity-90"
          closeOnClick={false}
          longitude={info.lng}
          latitude={info.lat}
          anchor="bottom"
          onClose={() => {
            setSelected(undefined);
          }}
        >
          {`segment_id: ${info.properties.id} state: ${info.properties.state}`}
        </Popup>
      )}
    </div>
  );
};
