import { Disclosure } from '@headlessui/react';
import { Link } from 'gatsby';
import React from 'react';
import { isHome } from '~/utils';
import {
  NavigationMenuItemDesktop,
  NavigationMenuItemMobile,
  NavigationMobileMenuButton,
} from '.';
import { Logo } from '../Logo';
import { navigationLinks } from './navigationLinks.const';
// import { StaticImage } from 'gatsby-plugin-image';

export const Navigation = ({ location }) => {
  return (
    // https://tailwindui.com/components/application-ui/navigation/navbars
    <Disclosure
      as="nav"
      className="z-20 bg-gray-50 shadow-md shadow-gray-400/5"
    >
      {({ open }) => (
        <>
          <div className="px-12">
            <div className="flex h-24 justify-between py-2">
              <nav className="flex w-full items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  {!isHome(location) && (
                    <Link to="/">
                      <Logo />
                    </Link>
                  )}
                  {isHome(location) && <Logo />}
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItemDesktop
                      name={link.name}
                      to={link.to}
                      currentPage={location?.pathname}
                      key={link.to}
                    />
                  ))}
                </div>
              </nav>

              <NavigationMobileMenuButton open={open} />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <nav className="space-y-1 pt-2 pb-3">
              {navigationLinks.map((link) => (
                <NavigationMenuItemMobile
                  name={link.name}
                  to={link.to}
                  currentPage={location?.pathname}
                  key={link.to}
                />
              ))}
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
