import React from 'react';
import { Popup } from 'react-map-gl';

type Props = {
  info: {
    show: boolean;
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
  setInfo: Function;
  setSelected: Function;
  // setInfo: (info: {
  //   show: boolean;
  //   lng: number;
  //   lat: number;
  //   properties?: any;
  // }) => void;
  // setSelected: (selected: number) => void;
};

export const RSVPopup: React.VFC<Props> = ({ info, setInfo, setSelected }) => {
  return (
    info.show && (
      <Popup
        className="opacity-90"
        closeOnClick={false}
        longitude={info.lng}
        latitude={info.lat}
        anchor="bottom"
        onClose={() => {
          setInfo({ ...info, show: false });
          setSelected(-1);
        }}
      >
        {`segment_id: ${info.properties.id} state: ${info.properties.state}`}
      </Popup>
    )
  );
};
