import clsx from 'clsx'
import type { LinkProps } from './types'

export const linkStyles = 'text-emerald-600 hover:underline'
export const menuLinkStyles = 'text-gray-500 hover:text-emerald-600 hover:no-underline'
export const selectedMenuLinkStyles = 'underline text-emerald-600 underline-emerald-600'

const buttonBase =
  'inline-flex items-center justify-center rounded-full py-3 px-5 focus:ring-[3px] border-2 shadow-sm focus:ring-blue-400'

export const buttonStylesForGreenLinkElement = clsx(
  buttonBase,
  'border-emerald-600 bg-emerald-600 text-white hover:border-emerald-600 hover:bg-emerald-600',
)
export const buttonStylesForDarkLinkElement = clsx(
  buttonBase,
  'border-slate-800 bg-slate-800 text-white hover:border-slate-900 hover:bg-slate-900',
)
export const buttonStylesForWhiteLinkElement = clsx(
  buttonBase,
  'border-emerald-600 bg-white text-slate-900 hover:bg-slate-100',
)

const hoverTranslateClassNames =
  'hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg'

export const cardStylesForLinkElements = clsx(
  hoverTranslateClassNames,
  'focus:ring-2 focus:ring-blue-400',
)

export const selectLinkStyle = (button?: LinkProps['button'], className?: string) => {
  switch (button) {
    case 'green':
      return clsx(buttonStylesForGreenLinkElement, className)
    case 'dark':
      return clsx(buttonStylesForDarkLinkElement, className)
    case 'white':
      return clsx(buttonStylesForWhiteLinkElement, className)
    case true:
      return clsx(buttonStylesForGreenLinkElement, className)
    default:
      return clsx(linkStyles, className)
  }
}
