import React from 'react';
import RsvLogo from '~/images/logo-rsv-info.svg';
// import { StaticImage } from 'gatsby-plugin-image';

/* <span className="sr-only">Radschnellverbindungen Logo</span>
<StaticImage
  className="h-8 w-auto sm:h-10"
  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
  alt="Logo Radschnellverbindungen"
/> */

export const Logo = () => {
  return (
    <img
      className=" h-12 w-auto md:h-16"
      src={RsvLogo}
      alt="Radschnellverbindungen.info Logo"
    />
  );
};
