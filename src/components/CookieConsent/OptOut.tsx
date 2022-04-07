import React, { useState } from 'react';
import { ExternalLink } from '~/components/Links/';
import { setOptInCookie } from '~/components/CookieConsent';

export const OptOut: React.VFC = () => {
  const [consent, setConsent] = useState<boolean | null>(null);
  const initialState = consent;
  if (!initialState) {
    return (
      <div className="mt-5">
        <p>Sie haben der Datenverarbeitung durch MapTiler nicht zugestimmt.</p>
      </div>
    );
  }
  if (!consent) {
    return (
      <div className="mt-5">
        <p>Sie haben Ihre Zustimmung zur Datenverarbeitung zurückgerufen.</p>
      </div>
    );
  }
  return (
    <div className="mt-5">
      <p>
        Sie haben der{' '}
        <ExternalLink href="https://www.maptiler.com/privacy-policy/">
          Datenschutzbestimmungen von MapTiler
        </ExternalLink>{' '}
        und dieser Datenschutzerklärung zugestimmt. Hier können Sie Ihre
        Einwilligung zurückziehen.
      </p>
      <button
        type="button"
        className="btn-brand-outline px-8 py-3 shadow md:text-lg"
        onClick={() => {
          setConsent(false);
          setOptInCookie(false);
        }}
      >
        Einwilligung Zurückziehen
      </button>
    </div>
  );
};
