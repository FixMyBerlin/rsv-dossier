import React from 'react'
import { SteckbriefePageHeader } from './SteckbriefePageHeader'
import { SteckbriefePageTeasers, type RsvTeaser } from './SteckbriefePageTeasers'

type Props = {
  headerTitle?: React.ReactNode
  headerDescription?: React.ReactNode
  rsvTeasers: RsvTeaser[]
  currentFilter: string
}

export const SteckbriefePage: React.FC<Props> = ({
  headerTitle,
  headerDescription,
  rsvTeasers,
  currentFilter,
}) => {
  const rsvCount = rsvTeasers.length > 1 ? ` ${rsvTeasers.length} ` : ' '
  const title = headerTitle || (
    <>
      Übersicht der aktuell {rsvCount}
      geplanten Radschnellverbindungen in {currentFilter}
    </>
  )
  const description = headerDescription || (
    <>
      Übersicht der aktuell {rsvCount} geplanten Radschnellverbindungen in {currentFilter}. Die
      Liste wird fortlaufend aktualisiert und ergänzt. Eine Übersicht aller Radschnellverbindungen
      im Bundesgebiet finden Sie unter:{' '}
      <a href="/steckbriefe" className="text-gray-50 hover:underline">
        alle Radschnellverbindungen
      </a>
      .
    </>
  )

  return (
    <div className="bg-white">
      <SteckbriefePageHeader
        headerTitle={title}
        headerDescription={description}
        currentFilter={currentFilter}
      />

      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Alle Radschnellverbindungen
        </h2>
        <SteckbriefePageTeasers rsvTeasers={rsvTeasers} />
      </section>
    </div>
  )
}
