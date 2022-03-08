import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import { Logo } from '~/components/Layout/Logo';
import { navigationLinks } from '~/components/Layout/Navigation/navigationLinks.const';
import HeroGraphic from '~/images/hero_bg.png';

export const Hero = (props) => {
  const { highlightedTitle, title, description, children } = props;
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="relative pt-6 pb-10 sm:pb-24">
        <Popover>
          <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
            <nav
              className="relative flex items-center justify-end sm:h-10"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="/">
                    <Link to="/" className="w-auto text-lg font-bold">
                      <Logo />
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
              <div className="mx-auto hidden md:flex md:space-x-10">
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
                  <Link to="/" className="w-auto text-lg font-bold">
                    <Logo />
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigationLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.to}
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

        <main
          className="min-h-[600px] bg-emerald-400 bg-bottom bg-no-repeat px-4 pb-10"
          style={{ backgroundImage: `url("${HeroGraphic}")` }}
        >
          <div className="mx-auto max-w-7xl pt-16 text-center sm:pt-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-white xl:inline">
                {highlightedTitle}
              </span>{' '}
              <span className="block xl:inline">{title}</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              {description}
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
