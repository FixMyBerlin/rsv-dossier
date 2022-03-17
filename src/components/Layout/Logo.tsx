import React from 'react';
import RsvLogo from '~/images/logo-rsv-info.svg';

export const Logo = () => {
  return (
    <img
      className=" h-12 w-auto md:h-16"
      src={RsvLogo}
      alt="Radschnellverbindungen.info Logo"
    />
  );
};
