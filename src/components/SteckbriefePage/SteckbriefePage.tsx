import React from 'react';
import { SteckbriefePageHeader } from './SteckbriefePageHeader';
import { SteckbriefePageTeasers } from './SteckbriefePageTeasers';

type Props = {
  headerTitle?: React.ReactNode;
  headerDescription?: React.ReactNode;
  radschnellwege: Queries.SteckbriefeIndexQuery['radschnellwege']['nodes'];
  currentFilter: string;
};

export const SteckbriefePage: React.FC<Props> = ({
  headerTitle,
  headerDescription,
  radschnellwege,
  currentFilter,
}) => {
  return (
    <div className="bg-white">
      <SteckbriefePageHeader
        headerTitle={headerTitle}
        headerDescription={headerDescription}
        totalCount={radschnellwege.length}
        currentFilter={currentFilter}
      />

      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 sm:px-6 lg:px-8"
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
