import React from 'react';
import { MapIcon } from '@heroicons/react/outline';

const stats = [
  { title: 'Radschnellverbindungen in Planung', number: '102' },
  { title: 'Förderumfang', number: '16 Mio. €' },
  {
    title: 'Planungskilometer',
    number: '260km',
  },
];

export const SplitContent = (props) => {
  const { title, mainStory, image, enableStats } = props;
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-emerald-300 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        {image}
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
              <MapIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg text-gray-500">{mainStory}</p>
          {enableStats && (
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                {stats.map((stat) => (
                  <div className="flex flex-col px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">
                      {stat.title}
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-emerald-500 sm:text-3xl">
                      {stat.number}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
