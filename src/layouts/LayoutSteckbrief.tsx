import clsx from 'clsx'
import React from 'react'
import { navHeightClasssName, Navigation } from './navigation/Navigation'

type Props = {
  className?: string
  children: React.ReactNode
}

export const LayoutSteckbrief: React.FC<Props> = ({ className, children }) => {
  return (
    <div className="flex h-full flex-col">
      <Navigation fixed path={''} />
      <div className={clsx(navHeightClasssName, 'flex-none')} />
      <main className={clsx(className, 'z-0 flex-grow')}>{children}</main>
    </div>
  )
}
