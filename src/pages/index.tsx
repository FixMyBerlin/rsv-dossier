import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Hero } from '~/components/Layout/Hero/Hero';
import { Layout } from '~/components/Layout/Layout';
import { TextWithImage } from '~/components/Layout/Section/';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} navigation={false}>
      <HelmetSeo
        title="Radschnellverbindungen"
        description="Alles zu Radschnellverbindungen in Deutschland"
      />
      <Hero
        highlightedTitle="Rad&shy;schnell&shy;verbindungen"
        title="schneller planen durch konstruktive Beteiligungs&shy;formate"
        description="Koordinator:innen von RSV-Projekten stehen vor der
        Herausforderung mit einer Vielzahl von internen und externen
        Stakeholdern in Kommunikation zu stehen.
        Das NRVP-Forschungsprojekt RSV-Baukasten will Wissen konstruktiv
        einbinden und alle Beteiligten auf einem Kenntnisstand halten.
        "
        location={location}
      >
        <>
          {/* <div className="rounded-full">
            <ButtonLink
              to="/karte"
              className="w-full px-8 py-3 shadow md:text-lg"
            >
              Zur Karte
            </ButtonLink>
          </div> */}
          <div className="mt-3 rounded-full sm:mt-0 sm:ml-3">
            <ButtonLink to="/projekt-hintergrund" outline large>
              Projekt-Hintergrund
            </ButtonLink>
          </div>
        </>
      </Hero>
      <TextWithImage
        image={
          <StaticImage
            src="./index/map4.png"
            alt="Zeigt eine Karte mit einer Planung"
          />
        }
        imageCredits=""
        title="Projektansatz und Zielsetzung des RSV-Baukastens"
        caption="Forschungsprojekt"
      >
        <p>
          Mit dem RSV-Baukasten entsteht ein modulares System zur Durchführung
          von Beteiligungsformaten zu den einzelnen Planungsphasen von
          Radschnellverbindungen, um interne und externe Stakeholder konstruktiv
          einzubinden.
        </p>
        <br />
        <p>
          <strong>
            Kartengestützte Formate für interne und externe Kommunikation
          </strong>
          <br />
          Durch eine anschauliche und verständliche Kommunikation mittels
          kartengestützter Formate sollen RSV-Planungsprojekten effizienter
          durchgeführt und ihre Akzeptanz erhöht werden. Das System soll die
          behörden- und gemeindeübergreifende interne Kommunikation und
          Abstimmung zu Machbarkeitsstudien und Vorplanungen unterstützen und
          damit bereits in der Frühphase für eine Beschleunigung des Prozesses
          sorgen. Grundlage ist ein dynamisches Online-Kartenformat das
          Informationen zu Radschnellverbindungen übersichtlich aufbereitet und
          Beteiligungsinstrumente daran anbindet.
        </p>
        <br />
        <p>
          <strong>Steckbriefe aller deutschen Radschnellverbindungen</strong>
          <br />
          In unseren Steckbriefen finden Sie eine systematische Übersicht aller
          aktuell geplanten Radschnellverbindungen sowie deren Trassenverläufe
          bzw. -korridore. Sie erhalten so einen Überblick welche Städte und
          Gemeinden durch Radschnellverbindungen miteinander verbunden werden
          oder in Korridoren verbunden werden könnten. Zielsetzung des BMDV ist
          ein lückenloses Radnetz in Deutschland zu schaffen.
          Radschnellverbindungen sind dafür elementar.
        </p>
        <br />
        <p>
          <strong>
            Hintergrund zum Thema Radschnellverbindungen
          </strong>
          <br />
          Radschnellverbindungen entwickeln sich mit dem verstärkten Aufkommen
          der Elektromobilität und dem akuten Handlungsbedarf zur Erreichung von
          Klimaschutzzielen rasant zu einem politischen und planerischen
          Instrument mit hohem Potential.
        </p>
        <br />
        <p>
          <strong>Kontakt</strong>
          <br />
          Wenn Sie sich mehr Informationen zum Forschungsprojekt RSV-Baukasten
          wünschen oder stärker involviert sein wollen, kontaktieren Sie uns.
          Die Laufzeit ist 2021-2023.
        </p>
        <p>
          <ButtonLink
            to="mailto:hello@fixmycity.de?subject=Anliegen zum RSV-Baukasten"
            className="btn-brand-outline mt-5"
          >
            Mail an hello@fixmycity.de schreiben
          </ButtonLink>
        </p>
      </TextWithImage>
    </Layout>
  );
};
export default IndexPage;
