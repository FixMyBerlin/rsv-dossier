import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Hero } from '~/components/Layout/Hero/Hero';
import { Layout } from '~/components/Layout/Layout';
import { TextWithImage } from '~/components/Layout/ContentSection';
import { StaticImage } from 'gatsby-plugin-image';
import { TextLink, MailToButtonLink } from '~/components/Links';
import { Heading2 } from '~/components/Text';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} navigation={false}>
      <HelmetSeo
        title="Radschnellverbindungen"
        description="Generelle Informationen sowie Informationen über einzelne Radschnellverbindungen in Deutschland."
      />
      <Hero
        highlightedTitle="Rad&shy;schnell&shy;verbindungen"
        title="schneller planen durch konstruktive Beteiligungs&shy;formate"
        description="Koordinator:innen von RSV-Projekten stehen vor der
        Herausforderung mit einer Vielzahl von internen und externen
        Akteuren in Kommunikation zu stehen.
        Das NRVP-Forschungsprojekt RSV-Baukasten will Wissen konstruktiv
        einbinden und alle Beteiligten auf einem Kenntnisstand halten.
        "
        location={location}
      />
      <TextWithImage
        image={
          <StaticImage
            src="./index/map4.png"
            alt="Zeigt eine Karte mit einer Planung"
            className="h-72 lg:h-full"
          />
        }
        imageCredits=""
        title="Projektansatz und Zielsetzung des RSV-Baukastens"
        caption="Forschungsprojekt"
      >
        <>
          <p>
            Mit dem RSV-Baukasten entsteht ein modulares System zur Durchführung
            von Beteiligungsformaten zu den einzelnen Planungsphasen von
            Radschnellverbindungen, um interne und externe Akteure konstruktiv
            einzubinden.
          </p>
          <Heading2>
            Kartengestützte Formate für interne und externe Kommunikation
          </Heading2>
          <p>
            Durch eine anschauliche und verständliche Kommunikation mittels
            kartengestützter Formate sollen RSV-Planungsprojekten effizienter
            durchgeführt und ihre Akzeptanz erhöht werden. Das System soll die
            behörden- und gemeindeübergreifende Kommunikation und Abstimmung zu
            Machbarkeitsstudien und Vorplanungen unterstützen und damit bereits
            in der Frühphase für eine Beschleunigung des Prozesses sorgen.
            Grundlage ist ein dynamisches Online-Kartenformat das Informationen
            zu Radschnellverbindungen übersichtlich aufbereitet und
            Beteiligungsinstrumente daran anbindet.
          </p>
          <Heading2>
            Steckbriefe aller deutschen Radschnellverbindungen
          </Heading2>
          <p>
            In unseren Steckbriefen aller Radschnellverbindungen finden Sie eine
            systematische Übersicht aller aktuell geplanten
            Radschnellverbindungen sowie deren Trassenverläufe bzw. -korridore.
            Sie erhalten so einen Überblick welche Städte und Gemeinden durch
            Radschnellverbindungen miteinander verbunden werden oder in
            Korridoren verbunden werden könnten. Zielsetzung von Bund und
            Ländern ist ein lückenloses Radnetz in Deutschland zu schaffen.
            Radschnellverbindungen sind dafür elementar.
            <br />
            <TextLink to="steckbriefe">
              {' '}
              Hier geht es zu den Steckbriefen &rarr;
            </TextLink>
          </p>
          <Heading2>Hintergründe und Grundlagen</Heading2>
          <p>
            Radschnellverbindungen entwickeln sich mit dem verstärkten Aufkommen
            der Elektromobilität und dem akuten Handlungsbedarf zur Erreichung
            von Klimaschutzzielen rasant zu einem politischen und planerischen
            Instrument mit hohem Potential. Zu Hintergründen und Grundlagen bald
            mehr auf dieser Website.
          </p>
          <br />
          <TextLink to="abstimmungen/abstimmungsprozesse">
            {' '}
            Hier geht es zur Studienarbeit – Verbesserung von internen
            Abstimmungsprozessen bei RSV-Planungen &rarr;
          </TextLink>
          <Heading2>Kontakt</Heading2>
          <p>
            Wenn Sie sich mehr Informationen zum Forschungsprojekt RSV-Baukasten
            wünschen oder stärker involviert sein wollen, kontaktieren Sie uns.
            Die Laufzeit des Projektes ist von 2021 bis Ende 2023 angesetzt.
          </p>
          <p>
            Mail an{' '}
            <MailToButtonLink
              mailto="hello@fixmycity.de"
              subject="Feedback Radschnellverbindungen"
              className="btn-brand-outline mt-5"
            >
              hello@fixmycity.de
            </MailToButtonLink>{' '}
            schreiben
          </p>
        </>
      </TextWithImage>
    </Layout>
  );
};
export default IndexPage;
