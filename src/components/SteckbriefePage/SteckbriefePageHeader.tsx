import React from 'react'

import { MailLink } from '@components/links/MailLink'

type Props = {
  headerTitle: React.ReactNode
  headerDescription: React.ReactNode
  currentFilter: string
}

export const SteckbriefePageHeader: React.FC<Props> = ({
  headerTitle,
  headerDescription,
  currentFilter,
}) => {
  return (
    <div className="relative bg-gray-800 pb-48 pt-24">
      <div className="absolute inset-0">
        {/* todo check image */}
        <img
          className="h-full w-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019Radschnellweg.jpg/799px-2019Radschnellweg.jpg?20190612173516"
          alt="header image"
        />
        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          {headerTitle}
        </h1>
        <div className="relative">
          <div className="absolute bottom-0 right-0 z-20">
            {/* <SteckbriefePageFilter currentFilter={currentFilter} /> */}
          </div>
          <div className="mt-6 max-w-3xl text-xl text-slate-300">
            {headerDescription}
            <p className="mt-3">
              Mail an{' '}
              <MailLink mailto="hello@fixmycity.de" subject="Anliegen zum RSV-Baukasten">
                hello@fixmycity.de
              </MailLink>{' '}
              schreiben
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
