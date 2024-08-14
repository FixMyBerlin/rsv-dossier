import clsx from 'clsx'
import React from 'react'
import { navHeightClasssName } from './navigation/Navigation'

type Props = {
  className?: string
  children: React.ReactNode
}

export const LayoutSteckbrief: React.FC<Props> = ({ className, children }) => {
  return (
    <div className="flex h-full flex-col">
      <div className={clsx(navHeightClasssName, 'flex-none')} />
      <div className={clsx(className, 'z-0 flex-grow')}>{children}</div>
    </div>
  )
}
