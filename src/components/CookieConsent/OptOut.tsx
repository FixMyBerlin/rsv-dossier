import React, { useEffect, useState } from 'react';
import { ExternalLink } from '~/components/Links/';
import { setOptInCookie, getOptInCookie } from '~/components/CookieConsent';
import { Button } from '~/components/Buttons';

export const OptOut: React.FC = () => {
  const [consent, setConsent] = useState(false);
  useEffect(() => setConsent(getOptInCookie()));
  if (!consent) {
    return (
      <div className="mt-5">
        <p>Sie haben der Datenverarbeitung durch MapTiler nicht zugestimmt.</p>
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
      <Button
        type="button"
        outline
        onClick={() => {
          setConsent(false);
          setOptInCookie(false);
        }}
      >
        Einwilligung Zurückziehen
      </Button>
    </div>
  );
};
