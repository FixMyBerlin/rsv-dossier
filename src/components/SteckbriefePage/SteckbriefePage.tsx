import React from 'react';
import { Link } from 'gatsby';
import { SteckbriefePageHeader } from './SteckbriefePageHeader';
import { SteckbriefePageTeasers } from './SteckbriefePageTeasers';

type Props = {
  headerTitle?: React.ReactNode;
  headerDescription?: React.ReactNode;
  radschnellwege: Queries.SteckbriefeIndexQuery['allMetaJson']['radschnellwege'];
  currentFilter: string;
};

export const SteckbriefePage: React.FC<Props> = ({
  headerTitle,
  headerDescription,
  radschnellwege,
  currentFilter,
}) => {
  const rsvCount =
    radschnellwege.length > 1 ? ` ${radschnellwege.length} ` : ' ';
  const title = headerTitle || (
    <>
      Übersicht der aktuell {rsvCount}
      geplanten Radschnellverbindungen in {currentFilter}
    </>
  );
  const description = headerDescription || (
    <>
      Übersicht der aktuell {rsvCount} geplanten Radschnellverbindungen in{' '}
      {currentFilter}. Die Liste wird fortlaufend aktualisiert und ergänzt. Eine
      Übersicht aller Radschnellverbindungen im Bundesgebiet finden Sie unter:{' '}
      <Link to="/steckbriefe" className="text-gray-50 hover:underline">
        alle Radschnellverbindungen
      </Link>
      .
    </>
  );

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
        <SteckbriefePageTeasers radschnellwege={radschnellwege} />
      </section>
    </div>
  );
};
