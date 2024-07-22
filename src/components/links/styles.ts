import clsx from 'clsx'
import type { LinkProps } from './types'

// LINK
export const linkStyles = 'text-emerald-700 hover:text-emerald-800 hover:underline active:underline'
export const menuLinkStylesDefault =
  'no-underline hover:underline hover:decoration-beige-600 text-black'
export const menuLinkActiveStyles = 'decoration-beige-600 decoration-2 text-black'

const buttonBase =
  'inline-flex items-center justify-center rounded-full py-2 px-4 drop-shadow border-2 border-emerald-300 transition-colors font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
// const defaultButtonStyle = 'bg-emerald-300 hover:bg-slate-800 hover:text-emerald-300'
// const outlineButtonStyle = 'bg-white hover:bg-emerald-300 hover:text-slate-600'
export const buttonStylesForLinkElement = clsx(
  buttonBase,
  'hover:bg-beige-50 border-gray-600 bg-white px-4 py-2 text-gray-600',
)

export const selectedButtonStylesForLinkElement = clsx(
  buttonBase,
  'border-beige-600 bg-beige-600 hover:bg-beige-50 px-4 py-2 text-white hover:text-gray-600',
)

export const menuButtonStylesForLinkElement = clsx(
  buttonBase,
  'border-white bg-white px-4 py-2 text-gray-900', // todo
)

export const selectedMenuButtonStylesForLinkElement = clsx(
  buttonBase,
  'border-beige-600 bg-beige-600 px-4 py-2 text-white',
)

const hoverTranslateClassNames =
  'hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg'

export const cardStylesForLinkElements = clsx(
  hoverTranslateClassNames,
  'active:ring-beige-600 active:ring-2', // activeStyleForLinkElement
)

export const selectLinkStyle = (button?: LinkProps['button'], className?: string) => {
  switch (button) {
    case true:
      return clsx(buttonStylesForLinkElement, className)
    default:
      return clsx(linkStyles, className)
  }
}
