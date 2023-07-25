import React from 'react';
import { Heading3 } from '~/components/Text';
import CloseIcon from './assets/CloseIcon.svg';
import { MailToLink } from '../Links';

type props = {
  setOverlay: (boolean) => void;
  name: string;
};

export const SteckbriefUpdateInfo: React.FC<props> = ({ setOverlay, name }) => {
  return (
    <div className="fixed bottom-20 left-auto right-6 top-auto z-50 h-36 w-96 rounded-lg bg-white px-6">
      <div className="flex">
        <Heading3>Gibt es neue Informationen?</Heading3>
        <div className="grow">
          <button
            className="float-right mt-6"
            type="button"
            onClick={() => setOverlay(false)}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm font-normal text-gray-500">
        Wir versuchen stets alle Informationen aktuell zu halten. Falls neue
        Informationen vorliegen{' '}
        <MailToLink
          className="text-gray-700"
          mailto="hello@fixmycity.de"
          subject={`Anliegen zum ${name}`}
        >
          schreiben Sie uns
        </MailToLink>{' '}
        einfach.
      </p>
    </div>
  );
};
