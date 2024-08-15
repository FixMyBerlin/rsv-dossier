import clsx from 'clsx'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export const H1: React.FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={clsx([
        'mt-7 text-3xl font-extrabold leading-snug text-gray-900 sm:text-5xl sm:leading-snug',
        className,
      ])}
    >
      {children}
    </h1>
  )
}

export const H2: React.FC<Props> = ({ children, className }) => {
  return (
    <h2 className={clsx(['mt-6 text-2xl font-extrabold sm:text-4xl', className])}>{children}</h2>
  )
}

export const H3: React.FC<Props> = ({ children, className }) => {
  return (
    <h3 className={clsx(['mt-5 text-xl font-extrabold sm:text-3xl', className])}>{children}</h3>
  )
}
export const H4: React.FC<Props> = ({ children, className }) => {
  return (
    <h4 className={clsx(['mt-5 text-lg font-extrabold sm:text-2xl', className])}>{children}</h4>
  )
}
