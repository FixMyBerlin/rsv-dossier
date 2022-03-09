import React from 'react';
import RsvLogo from '~/images/logo-rsv-info.svg';

export const Logo = () => {
  return (
    <img
      className="hidden h-16 w-auto lg:block"
      src={RsvLogo}
      alt="Radschnellverbindungen.info Logo"
    />
  );
};
