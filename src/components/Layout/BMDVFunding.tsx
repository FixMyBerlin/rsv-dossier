import React from 'react';
import BmdvFundingImage from '~/static/BMDV-Foerderung.svg';

/* <span className="sr-only">Radschnellverbindungen Logo</span>
<img
  className="h-8 w-auto sm:h-10"
  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
  alt="Logo Radschnellverbindungen"
/> */

export const BMDVFunding = () => {
  return (
    <div className="display:flex">
      <h2 className="mt-6 text-lg font-bold text-gray-500">Förderprogramm</h2>
      <div>
        <div>
          <BmdvFundingImage alt="Förderung durch BMDV" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
    </div>
  );
};
