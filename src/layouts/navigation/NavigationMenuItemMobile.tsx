import { DisclosureButton } from '@headlessui/react'
import clsx from 'clsx'

type Props = { currentPage: string; name: string; to: string }

export const NavigationMenuItemMobile: React.FC<Props> = ({ currentPage, name, to }) => {
  const active = currentPage === to

  return (
    <DisclosureButton
      as="a"
      href={to}
      className={clsx(
        { 'border-emerald-400 bg-emerald-50 text-emerald-400': active },
        {
          'border-transparent text-slate-500 hover:border-gray-300 hover:bg-gray-50 hover:text-slate-700':
            !active,
        },
        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
      )}
    >
      {name}
    </DisclosureButton>
  )
}
