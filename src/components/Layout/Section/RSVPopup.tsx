import React from 'react';
import { Popup } from 'react-map-gl';

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
  setSelected: (selected: number) => void;
};

export const RSVPopup: React.VFC<Props> = ({ info, setSelected }) => {
  return (
    <Popup
      className="opacity-90"
      closeOnClick={false}
      longitude={info.lng}
      latitude={info.lat}
      anchor="bottom"
      onClose={() => {
        setSelected(-1);
      }}
    >
      {`segment_id: ${info.properties.id} state: ${info.properties.state}`}
    </Popup>
  );
};
