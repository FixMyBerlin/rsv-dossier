import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutArticle } from '~/components/Layout';
import { ExternalLink, MailToLink } from '~/components/Links';
import BmdvFundingImage from '~/static/BMDV-Foerderung.svg';

const ImprintPage = () => {
  return (
    <LayoutArticle>
      <HelmetSeo noindex title="Impressum" />
      <h1>Impressum</h1>
      <p>
        <strong>FixMyCity GmbH</strong>
        <br />
        Karlsgartenstraße 12
        <br />
        12049 Berlin
        <br />
        E-Mail-Adresse:{' '}
        <MailToLink mailto="hello@fixmycity.de">hello@fixmycity.de</MailToLink>
        <br />
        Telefon: 030 / 549 08 665
        <br />
      </p>
      <p>Gesellschafter: Boris Hekele und Heiko Rintelen</p>
      <p>
        Registergericht: Amtsgericht Berlin-Charlottenburg
        <br />
        Registernummer: HRB 205031 B
      </p>
      <p>Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE323489466</p>
      <p>
        Verantwortlicher i.S.v. § 55 Rundfunkstaatsvertrag (RStV): Boris Hekele
      </p>
      <h2>Feedback &amp; Kontakt</h2>
      <p>
        Wir freuen uns über Kommentare Anregungen und Unterstützung an{' '}
        <MailToLink mailto="feedback@fixmycity.de">
          feedback@fixmycity.de
        </MailToLink>
      </p>
      <p>
        Du findest uns auch auf{' '}
        <ExternalLink href="https://twitter.com/fixmyberlin">
          twitter
        </ExternalLink>{' '}
        |{' '}
        <ExternalLink href="https://www.instagram.com/fixmycity/">
          instagram
        </ExternalLink>{' '}
        |{' '}
        <ExternalLink href="https://www.facebook.com/FixMyCityApp/">
          facebook
        </ExternalLink>{' '}
        und{' '}
        <ExternalLink href="https://www.linkedin.com/company/fixmycity">
          linkedIn
        </ExternalLink>
      </p>
      <p>
        Sofern du Bugs oder Verbesserungsvorschläge hast, gib uns gerne{' '}
        <ExternalLink href="https://github.com/FixMyBerlin/fixmy.rsv/issues/new/choose">
          auf GitHub Feedback
        </ExternalLink>
        .
      </p>
      <h2>Open Source</h2>
      <p>
        Wir setzen Open Source Software ein und veröffentlichen auch unsere
        eigenen Software-Produkte unter Open Source-Lizenzen. Unseren Quellcode
        unter der AGPL v3 Lizenz finden Sie unter{' '}
        <ExternalLink href="https://github.com/FixMyBerlin">
          github.com/FixMyBerlin
        </ExternalLink>
      </p>
      <h2>Urheberrechte Fotos</h2>
      <p>
        Wenn nicht anders angegeben stehen die auf dieser Website verwendeten
        Fotos unter{' '}
        <ExternalLink
          href="https://creativecommons.org/licenses/by-nc/4.0/deed.de"
          title="Infos zu CC-Lizenz BY-NC 4.0"
        >
          Creative Commons-Lizenz BY-NC 4.0
        </ExternalLink>
        .
      </p>
      <h2>Förderung</h2>
      <p>
        FixMyCity wird vom BMDV im Rahmen des NRVP gefördert (Förderkennzeichen{' '}
        <strong>VB2025</strong>).
        <br />
        <ExternalLink href="https://nationaler-radverkehrsplan.de/de/praxis/modulares-system-fuer-radschnellverbindungen">
          <strong>Projektsteckbrief</strong> Baukasten-RSV: Modulares System für
          Radschnellverbindungen
        </ExternalLink>
      </p>

      <div className="partner">
        <ExternalLink href="https://bmdv.bund.de/" newWindow>
          <BmdvFundingImage alt="Förderung durch BMDV" />
        </ExternalLink>
      </div>
    </LayoutArticle>
  );
};

export default ImprintPage;
