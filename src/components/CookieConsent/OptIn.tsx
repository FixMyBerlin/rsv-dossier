import React from 'react';
import { ExternalLink, TextLink } from '~/components/Links';
import { setOptInCookie } from '~/components/CookieConsent';
import { Button } from '~/components/Buttons';

type Props = {
  setConsent: (val: boolean | null) => void;
};

export const OptIn: React.FC<Props> = ({ setConsent }) => {
  return (
    <div className="mb-6 h-fit rounded-2xl bg-white shadow">
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
          <Button
            type="submit"
            outline
            onClick={() => {
              setConsent(true);
              setOptInCookie(true);
            }}
          >
            Ja, ich stimme zu
          </Button>
          <Button
            type="button"
            className="mx-4"
            outline
            onClick={() => {
              setConsent(false);
              setOptInCookie(false);
            }}
          >
            Ablehnen
          </Button>
        </div>
      </div>
    </div>
  );
};
