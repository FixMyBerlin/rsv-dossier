import React, { useState } from 'react';
import { ExternalLink } from '~/components/Links';

export const MapTilerOptOut = () => {
  const [consent, setConsent] = useState(
    new Date(localStorage.getItem('MAPTILER_CONSENT') || undefined) < new Date()
  );
  const revokeConsent = () => {
    setConsent(false);
    localStorage.setItem(
      'MAPTILER_CONSENT',
      new Date(undefined).toDateString()
    );
  };
  return (
    <div>
      <div>
        <p>
          Zur darstellung unserer Karten benutzen wird MapTiler wodurch wir eine
          Weitergabe von Nutzerinformationen an dritte nicht vermeiden können.
          MapTiler speichert nur kurzfristig notwendige Daten zu Deiner IP
          Adressse.
        </p>
      </div>
      {consent && (
        <div className="mt-5">
          <p>
            Du hast der{' '}
            <ExternalLink href="https://www.maptiler.com/consent-policy/">
              Datenschutzbestimmungen von MapTiler
            </ExternalLink>{' '}
            zugestimmt.
          </p>
          <button
            type="button"
            className="btn-brand-outline px-8 py-3 shadow md:text-lg"
            onClick={revokeConsent}
          >
            Zurückziehen
          </button>
        </div>
      )}
    </div>
  );
};
