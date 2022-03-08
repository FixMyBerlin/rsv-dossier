import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Hero } from '~/components/Layout/Hero/Hero';
import { Layout } from '~/components/Layout/Layout';
import { TextWithImage } from '~/components/Layout/Section/';
import { ExternalLink } from '~/components/Links';
import { ButtonLink } from '~/components/Links/ButtonLink';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} navigation={false}>
      <HelmetSeo
        title="Radschnellwege"
        description="Hier entsteht die Informationsstelle für Radschnellverbindungen in Deutschland"
      />
      <Hero
        highlightedTitle="Radschnellverbindungen"
        title="schneller planen und bauen"
        description="Wir helfen Koordinator:innen durch frühzeitig ansetzende
        Partizipation bei Radschnellverbindungen und beschleunigen deren Umsetzung erheblich."
      >
        <div className="rounded-full">
          <ButtonLink
            to="/karte"
            className="w-full px-8 py-3 shadow md:text-lg"
          >
            Zur Karte
          </ButtonLink>
        </div>
        <div className="mt-3 rounded-full sm:mt-0 sm:ml-3">
          <ButtonLink
            to="/projekte"
            className="btn-brand-outline w-full px-8 py-3 shadow md:text-lg"
          >
            Beteiligen
          </ButtonLink>
        </div>
      </Hero>

      <TextWithImage
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/RS1_Radschnellweg_Ruhr_in_M%C3%BClheim_2.jpg/800px-RS1_Radschnellweg_Ruhr_in_M%C3%BClheim_2.jpg?uselang=de"
        imageAlt="Zeigt den RS1 in NRW"
        imageCredits="Wikimedia"
        title="Deutschland wird Fahrradland"
        caption="Hintergrund"
      >
        <p>
          Radschnellverbindungen sind in Deutschland als Infrastrukturelemente
          verhältnismäßig neu. Sie entwickeln sich seit dem verstärkten
          Aufkommen der Elektromobilität bei Fahrrädern und dem akuten
          Handlungsbedarf zur Erreichung von Klimaschutzzielen jedoch rasant zu
          einem politischen und planerischen Instrument mit hohem Potential und
          großer Akzeptanz. Die hohe Zahl von Machbarkeitsstudien und
          Vorplanungen in Kommunen in Deutschland bestätigt dies. Adäquate
          Online-Beteiligungsformate für die besonderen Anforderungen bei der
          Planung von Radschnellverbindungen sind bisher kaum vorhanden. Die
          digitale Konsultation und Beteiligung von Bürger:innen wird bisher nur
          eingeschränkt, meist mittels allgemeiner Online-Beteiligungs-Tools
          durchgeführt.
        </p>
      </TextWithImage>
      <TextWithImage
        imageUrl="https://images.unsplash.com/photo-1541687664971-639c2f8b63f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        imageAlt="TestAlt"
        imageCredits=""
        title="RSV-Baukasten"
        caption="Projektansatz"
      >
        <p>
          Mit dem RSV-Baukasten entsteht ein modulares System zur Durchführung
          von Online-Beteiligungsformaten und Bürgerinformation zu
          Radschnellverbindungen, das Bedarfe und Wissen konstruktiv in
          Planungsprozesse einfließen lässt. Grundlage ist ein dynamisches
          Online-Kartenformat das Informationen zu den geplanten
          Radschnellverbindungen übersichtlich aufbereitet und
          Beteiligungsinstrumente daran anbindet.
        </p>
        <b>Zentrale Ziele des geplanten RSV-Baukastens:</b>
        <ul className="list-inside list-disc">
          <li>
            Passgenaue Online-Beteiligungsformate zur effektiven Einbindung der
            Bürger:innen bei RSV-Planungen.
          </li>
          <li>
            Verbesserte Kommunikation von RSV-Planungen in der Öffentlichkeit
            und Steigerung der Akzeptanz von Planungsprojekten.
          </li>
          <li>
            Beschleunigung der Errichtung von Radschnellverbindungen durch
            zentralen Informationsaustausch und Kommunikationsschnittstellen auf
            Ebene der Planenden.
          </li>
        </ul>
      </TextWithImage>
      <TextWithImage
        imageUrl="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        imageAlt=""
        imageCredits=""
        title="Kontakt"
        caption="Hintergrund"
      >
        <p>
          Wenn Sie Interesse an einer Zusammenarbeit im Rahmen des Projektes
          oder sich weitere Hintergründe zum Projekt wünschen, schreiben Sie mir
          an{' '}
          <ExternalLink href="mailto:hekele@radschnellverbindungen.info">
            <b>hekele@radschnellverbindungen.info</b>
          </ExternalLink>
        </p>

        <p className="mt-5 text-black">
          <b>Boris Hekele, Projektleiter</b>
        </p>
      </TextWithImage>
      <TextWithImage
        imageUrl="https://images.unsplash.com/photo-1579170053380-58064b2dee67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXVyb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        imageAlt=""
        imageCredits=""
        title="Förderübersicht"
        caption=""
      >
        <p>
          Auf der Übersichtsseite zu Fördermitteln finden Sie die wichtigsten
          Informationen zu Förderprogrammen im Kontext von
          Radschnellverbindungen und Partizipation in Bund und Land.
        </p>
        <ButtonLink to="/foerderungen" className="btn-brand-outline mt-5">
          Zur Förderübersicht
        </ButtonLink>
      </TextWithImage>
    </Layout>
  );
};

export default IndexPage;
