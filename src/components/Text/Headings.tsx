import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Heading1: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="mt-7 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
      {children}
    </h1>
  )
}

export const Heading2: React.FC<Props> = ({ children }) => {
  return <h2 className="mt-6 text-xl font-bold text-gray-700 sm:text-2xl">{children}</h2>
}

export const Heading3: React.FC<Props> = ({ children }) => {
  return <h3 className="mt-5 text-lg font-bold text-gray-700">{children}</h3>
}
