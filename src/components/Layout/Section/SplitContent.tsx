import React from 'react';
import { MapIcon } from '@heroicons/react/outline';

export const SplitContent = () => {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-emerald-300 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/RS1_Radschnellweg_Ruhr_in_M%C3%BClheim_2.jpg/800px-RS1_Radschnellweg_Ruhr_in_M%C3%BClheim_2.jpg?uselang=de"
          alt="Support team"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
              <MapIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Deutschland wird Fahrradland
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus
            omnis, molestiae esse placeat, exercitationem magnam quod molestias
            quia aspernatur deserunt voluptatibus.
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Radschnellwege in Planung
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-emerald-500 sm:text-3xl">
                  102
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Förderumfang
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-emerald-500 sm:text-3xl">
                  16 Mio. €
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Planungskilometer
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-emerald-500 sm:text-3xl">
                  120km
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
