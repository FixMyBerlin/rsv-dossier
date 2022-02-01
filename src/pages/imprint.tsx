import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutArticle } from '~/components/Layout';
import { ExternalLink } from '~/components/Links/ExternalLink';
import BmdvFundingImage from '~/static/BMDV_Foerderung.svg';

const ImprintPage = () => {
  return (
    <LayoutArticle>
      <HelmetSeo noindex title="Impressum" />
      <h2>Impressum</h2>
      <p>
        <b>FixMyCity GmbH</b>
        <br />
        Karlsgartenstraße 12
        <br />
        12049 Berlin
        <br />
        E-Mail-Adresse:{' '}
        <a href="mailto:hello@fixmycity.de">hello@fixmycity.de</a>
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
      <h3>Feedback &amp; Kontakt</h3>
      <p>
        Wir freuen uns über Kommentare Anregungen und Unterstützung an{' '}
        <a href="mailto:feedback@fixmycity.de">feedback@fixmycity.de</a>
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
          auf github.com Feedback
        </ExternalLink>
        .
      </p>
      <h3>Open Source</h3>
      <p>
        Wir setzen Open Source Software ein und veröffentlichen auch unsere
        eigenen Software-Produkte unter Open Source-Lizenzen. Unseren Quellcode
        unter der AGPL v3 Lizenz finden Sie unter{' '}
        <ExternalLink href="https://github.com/FixMyBerlin">
          github.com/FixMyBerlin
        </ExternalLink>
      </p>
      <h3>Urheberrechte Fotos</h3>
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
      <h3>Förderung</h3>
      <p>
        FixMyCity wird vom BMDV im Rahmen des NRVP gefördert (Förderkennzeichen{' '}
        <b>VB2025</b>).
        <br />
        <ExternalLink href="https://nationaler-radverkehrsplan.de/de/praxis/modulares-system-fuer-radschnellverbindungen">
          <b>Projektsteckbrief</b> Baukasten-RSV: Modulares System für
          Radschnellverbindungen
        </ExternalLink>
      </p>

      <div className="partner">
        <a href="https://bmdv.bund.de/" target="_blank" rel="noreferrer">
          <BmdvFundingImage alt="Förderung durch BMDV" />
        </a>
      </div>
    </LayoutArticle>
  );
};

export default ImprintPage;
