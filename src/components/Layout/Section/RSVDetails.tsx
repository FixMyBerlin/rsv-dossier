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
const stats = {
  costs: 'Kosten',
  length: 'Länge',
  community: 'Gemeinde',
  duration: 'Zeitraum',
};

const summary =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
export const RSVDetails = (props) => {
  const { radschnellweg } = props;
  return (
    <div className="relative bg-white">
      <div className="h-56 rounded-br-lg bg-emerald-300 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        {/* TODO: replace with actual map */}
        <img
          className="h-full w-full rounded-br-lg object-cover"
          src={
            'https://images.unsplash.com/photo-1541687664971-639c2f8b63f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          }
          alt="Support team"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            RSV: {radschnellweg.from} &rarr; {radschnellweg.to}
          </h2>
          <h2 className="mt-6 text-lg font-bold text-gray-500">Kurzfassung</h2>
          <p className="text-lg text-gray-500">{summary}</p>
          <div className="mt-4 rounded-full">
            <ButtonLink
              to={radschnellweg.website}
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
