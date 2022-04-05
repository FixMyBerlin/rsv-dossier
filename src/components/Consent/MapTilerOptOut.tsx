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
          MapTiler ist ein Kartendienst. Seine Nutzung ist vollkommen freiwillig. Anbieter ist die MapTiler AG, Höfnerstrasse 98, Unterägeri, Zug 6314 in der Schweiz. Die Schweiz gehört weder der EU noch dem EWR an. Sie ist vielmehr ein sog. Drittstaat, in dem die DSGVO nicht gilt. Jedoch gibt es für die Schweiz einen Angemessenheitsbeschluss der EU Kommission nach Artikel 45 DSGVO, welcher der Schweiz im Allgemeinen ein angemessenes, der DSGVO entsprechendes Datenschutzniveau attestiert. Bitte lesen Sie vor einer Nutzung von MapTiler den Compliance-Hinweis von MapTiler unter https://www.maptiler.com/privacy-policy/ durch. Danach erhebt die MapTiler AG zur Nutzung der Kartenfunktion und aus Gründen der IT-Sicherheit Ihre IP- Adresse. Bitte nutzen Sie MapTiler nur, wenn Sie dem Tool trauen. Im Verhältnis zu uns erfolgt Ihre Nutzung von MapTiler völlig anonym. Wir fragen keine personenbezogenen oder personenbeziehbaren Daten ab. Sofern wir solche freiwillig erhalten, löschen wir diese unverzüglich und unwiederbringlich.
          
          Hier können Sie Ihre Einwilligung zurückziehen.
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
           Einwilligung Zurückziehen
          </button>
        </div>
      )}
    </div>
  );
};
