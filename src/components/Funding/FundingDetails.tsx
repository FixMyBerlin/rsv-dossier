import React from 'react';
import { Stats } from '~/types/Stats';

type Props = {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  stats?: Stats[];
  children: JSX.Element;
};

export const FundingDetails: React.FC<Props> = ({
  title,
  imageUrl = '',
  imageAlt = '',
  stats = [],
  children,
}) => {
  return (
    <div className="relative bg-white">
      <div className="relative mt-10 max-w-4xl rounded-r-xl bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:py-10">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-2/3 lg:max-w-none lg:pl-10">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 text-lg text-gray-500">{children}</div>
          {stats && (
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                {stats.map((stat) => (
                  <div className="flex">
                    <div className="flex flex-col px-8 pt-8 ">
                      <span className="w-5 object-cover  md:w-10 ">
                        {stat.icon}
                      </span>
                      <dt className="text-base font-medium text-gray-500">
                        {stat.title}
                      </dt>
                      <dd className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        {stat.number}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
      {imageUrl && (
        <div className="relative h-56 bg-emerald-300 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src={imageUrl}
            alt={imageAlt}
          />
        </div>
      )}
    </div>
  );
};
