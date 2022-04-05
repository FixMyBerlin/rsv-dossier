import React from 'react';
import { ExternalLink, TextLink } from '~/components/Links';

export const MapTilerOptIn = ({ setConsent }) => {
  const giveConsent = () => {
    setConsent(true);
    localStorage.setItem('MAPTILER_CONSENT', new Date().toDateString());
  };
  return (
    <div className="h-fit self-center bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Zur Nutzung der Kartenfunktion stimme bitte den{' '}
            <ExternalLink href="https://www.maptiler.com/privacy-policy/">
              Datenschutzbestimmungen von MapTiler
            </ExternalLink>{' '}
            zu. MapTiler speichert nur kurzfristig notwendige Daten zu Deiner IP
            Adressse. Du kannst Deine Zustimmung auf unserer{' '}
            <TextLink to="/datenschutz/">Datenschutz-Seite</TextLink>{' '}
            zurückziehen.
          </p>
          Zur darstellung unserer Karten benutzen wird MapTiler wodurch wir eine
          Weitergabe von Nutzerinformationen an dritte nicht vermeiden können.
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="btn-brand-outline px-8 py-3 shadow md:text-lg"
            onClick={giveConsent}
          >
            Akzeptieren{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
