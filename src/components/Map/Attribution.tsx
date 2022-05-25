import React from 'react';

const mapAttribution = {
  MapTiler: 'https://www.maptiler.com/copyright/',
  'OpenStreetMap contributors': 'https://www.openstreetmap.org/copyright',
  CARTO: 'https://carto.com/',
};

export const Attribution = () => {
  return (
    <>
      {Object.keys(mapAttribution).map((name) => (
        <a
          key={name}
          className="hover:underline"
          href={mapAttribution[name]}
          target="_blank"
          rel="noreferrer"
        >
          &copy; {name} &nbsp;
        </a>
      ))}
    </>
  );
};
