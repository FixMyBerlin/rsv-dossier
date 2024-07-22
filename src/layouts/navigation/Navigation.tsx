import { Disclosure, DisclosurePanel } from '@headlessui/react'
import clsx from 'clsx'

import { navigationLinks } from './navigationLinks.const'
import { NavigationMenuItemDesktop } from './NavigationMenuItemDesktop'
import { NavigationMenuItemMobile } from './NavigationMenuItemMobile'
import { NavigationMobileMenuButton } from './NavigationMobileMenuButton'

type Props = { path: string }

export const navHeightClasssName = 'h-24'
export const Navigation: React.FC<Props> = ({ path }) => {
  return (
    // https://tailwindui.com/components/application-ui/navigation/navbars
    <Disclosure as="nav" className={'z-20 bg-gray-50 shadow-md shadow-gray-400'}>
      {({ open }) => (
        <>
          <div className="px-12">
            <div className={clsx(navHeightClasssName, 'flex justify-between py-2')}>
              <nav className="flex w-full items-center justify-between">
                <div className="w-48">
                  {/* todo image / svg ?*/}
                  <img
                    className="h-24 w-48"
                    src={'src/layouts/navigation/assets/RSVLogo.svg'}
                    alt=""
                  />
                </div>
                <div className="hidden md:flex md:space-x-10">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItemDesktop
                      name={link.name}
                      to={link.to}
                      currentPage={path}
                      key={link.to}
                    />
                  ))}
                </div>
              </nav>

              <NavigationMobileMenuButton open={open} />
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <nav className="space-y-1 pb-3 pt-2">
              {navigationLinks.map((link) => (
                <NavigationMenuItemMobile
                  name={link.name}
                  to={link.to}
                  currentPage={path}
                  key={link.to}
                />
              ))}
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
