import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { navigationLinks } from '../components/Layout/Navigation/navigationLinks.const';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-24 -translate-x-1/3 transform lg:-translate-x-5"
            fill="none"
            viewBox="0 0 604 250"
            width={604}
            height={250}
          >
            <defs>
              <pattern
                id="doodad"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(135)"
              >
                <rect width="100%" height="100%" fill="rgba(171, 171, 171,0)" />
                <circle cx="20" cy="20" r="2" fill="rgba(252, 146, 60,1)" />
                <path
                  d="M18 20aInfinityInfinity 0 0 0InfinityNaNaInfinityInfinity 0 0 0-InfinityNaNm0.5 0aInfinityInfinity 0 0 1InfinityNaNaInfinityInfinity 0 0 1-InfinityNaNz"
                  fill="rgba(52, 211, 153,1)"
                />
              </pattern>
            </defs>
            <rect fill="url(#doodad)" height="200%" width="200%" />
          </svg>

          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:translate-y-1/3 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="doodad"
                width="32"
                height="32"
                viewBox="0 0 40 40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(135)"
              >
                <rect width="100%" height="100%" fill="rgba(171, 171, 171,0)" />
                <circle cx="20" cy="20" r="1" fill="rgba(252, 146, 60,1)" />
                <path
                  d="M19 20aInfinityInfinity 0 0 0InfinityNaNaInfinityInfinity 0 0 0-InfinityNaN"
                  fill="rgba(52, 211, 153,1)"
                />
              </pattern>
            </defs>
            <rect fill="url(#doodad)" height="200%" width="200%" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-end sm:h-10"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="/">
                    {/* <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    /> */}
                    <Link to="/" className="w-auto text-lg font-bold">
                      Radschnellverbindungen
                    </Link>
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigationLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.to}
                    className="cursor-pointer font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Planen von</span>{' '}
              <span className="block text-emerald-500 xl:inline">
                Radschnellverbindungen
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Durch gute Beteiligungsprozesse können Planungen von
              Radschnellverbindungen deutlich verschnellert und erleichert
              werden.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-full">
                <ButtonLink
                  to="/map"
                  className="w-full px-8 py-3 shadow md:text-lg"
                >
                  Zur Karte
                </ButtonLink>
              </div>
              <div className="mt-3 rounded-full  sm:mt-0 sm:ml-3">
                <ButtonLink
                  to="/beteiligen"
                  className="btn-brand-outline w-full px-8 py-3 shadow md:text-lg"
                >
                  Beteiligen
                </ButtonLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
