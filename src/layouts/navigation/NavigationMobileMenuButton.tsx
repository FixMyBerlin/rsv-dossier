import { DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'

type Props = { open: boolean }

export const NavigationMobileMenuButton: React.FC<Props> = ({ open }) => {
  return (
    <div className="mr-1 flex items-center md:hidden">
      <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-gray-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-400">
        <span className="sr-only">Hauptmenü öffnen</span>
        {open ? (
          <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
        )}
      </DisclosureButton>
    </div>
  )
}
