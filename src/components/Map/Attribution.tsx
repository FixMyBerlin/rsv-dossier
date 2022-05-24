import React from 'react';

export const Attribution = () => {
  return (
    <div className="absolute bottom-0 right-0 z-10 translate-y-1 translate-x-1 pr-3 pb-1 text-xs">
      <a
        href="https://www.maptiler.com/copyright/"
        target="_blank"
        rel="noreferrer"
      >
        &copy; MapTiler
      </a>{' '}
      <a
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noreferrer"
      >
        &copy; OpenStreetMap contributors
      </a>{' '}
      <a href="https://carto.com/" target="_blank" rel="noreferrer">
        &copy; CARTO
      </a>
    </div>
  );
};
