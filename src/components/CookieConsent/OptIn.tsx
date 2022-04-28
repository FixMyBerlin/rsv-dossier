import React from 'react';
import { ExternalLink, TextLink } from '~/components/Links';
import { setOptInCookie } from '~/components/CookieConsent';

type Props = {
  setConsent: (val: boolean | null) => void;
};

export const OptIn: React.FC<Props> = ({ setConsent }) => {
  return (
    <div className="h-fit rounded-t-2xl bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="mt-2 text-sm text-gray-500">
          <p>
            Zur Nutzung der Kartenfunktion stimme bitte den{' '}
            <ExternalLink href="https://www.maptiler.com/privacy-policy/">
              Datenschutzbestimmungen von MapTiler
            </ExternalLink>{' '}
            zu. MapTiler speichert nur kurzfristig notwendige Daten zu Deiner
            IP- Adresse. Du kannst Deine Zustimmung auf unserer{' '}
            <TextLink to="/datenschutz/">Datenschutz-Seite</TextLink>{' '}
            zurückziehen.
          </p>
          Zur Darstellung unserer Karten benutzen wir MapTiler, wodurch wir eine
          Weitergabe von Nutzerinformationen an Dritte nicht vermeiden können.
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="btn-brand-outline mr-3 px-8 py-3 shadow md:text-lg"
            onClick={() => {
              setConsent(true);
              setOptInCookie(true);
            }}
          >
            Ja, ich stimme zu
          </button>
          <button
            type="button"
            className="btn-brand-outline px-8 py-3 shadow md:text-lg"
            onClick={() => {
              setConsent(false);
              setOptInCookie(false);
            }}
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};
