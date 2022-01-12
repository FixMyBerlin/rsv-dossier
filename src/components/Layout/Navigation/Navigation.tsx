import { Disclosure } from '@headlessui/react';
import React from 'react';
import {
  NavigationMenuItemDesktop,
  NavigationMenuItemMobile,
  NavigationMobileMenuButton,
} from '.';
import { navigationLinks } from './navigationLinks.const';

export const Navigation = ({ location }) => {
  // https://tailwindui.com/components/application-ui/navigation/navbars
  return (
    <Disclosure
      as="nav"
      className="bg-white shadow-md shadow-green-800/20 z-20"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <nav className="flex justify-between w-full">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />{' '}
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
            <nav className="pt-2 pb-3 space-y-1">
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
