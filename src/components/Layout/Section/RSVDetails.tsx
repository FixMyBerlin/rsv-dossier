import React from 'react';
import { MapIcon } from '@heroicons/react/outline';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { BMDVFunding } from '~/components/Layout/BMDVFunding';

const statsIcons = {
  costs: MapIcon,
  length: MapIcon,
  community: MapIcon,
  duration: MapIcon,
};

export const RSVDetails = (props) => {
  const { title, summary, stats, imageUrl, projectUrl } = props;
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-emerald-300 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        {/* TODO: replace with actual map */}
        <img
          className="h-full w-full object-cover"
          src={imageUrl}
          alt="Support team"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <h2 className="mt-6 text-lg font-bold text-gray-500">Kurzfassung</h2>
          <p className="text-lg text-gray-500">{summary}</p>
          <div className="mt-4 rounded-full">
            <ButtonLink
              to={projectUrl}
              className="btn-brand-outline px-8 py-3 shadow md:text-lg"
            >
              Projektwebsite
            </ButtonLink>
          </div>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              {Object.keys(stats).map((stat) => (
                <div className="flex flex-col px-8 pt-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-500 text-white">
                    <MapIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {statsIcons[stat]}
                  <dt className="order-2 text-base font-medium text-gray-500">
                    {stats[stat]}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <BMDVFunding />
          </div>
        </div>
      </div>
    </div>
  );
};
