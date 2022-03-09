import { Disclosure } from '@headlessui/react';
import { Link } from 'gatsby';
import React from 'react';
import {
  NavigationMenuItemDesktop,
  NavigationMenuItemMobile,
  NavigationMobileMenuButton,
} from '.';
import { Logo } from '../Logo';
import { navigationLinks } from './navigationLinks.const';

export const Navigation = ({ location }) => {
  return (
    // https://tailwindui.com/components/application-ui/navigation/navbars
    <Disclosure
      as="nav"
      className="z-20 bg-orange-400 shadow-md shadow-green-800/20"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <nav className="flex w-full justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="w-auto">
                    <Logo />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItemDesktop
                      name={link.name}
                      to={link.to}
                      currentPage={location?.pathname}
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
                />
              ))}
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
