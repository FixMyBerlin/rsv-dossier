import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Hero } from '~/components/Layout/Hero/Hero';
import { Layout } from '~/components/Layout/Layout';
import { TextWithImage } from '~/components/Layout/Section/';
import { ExternalLink } from '~/components/Links';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} navigation={false}>
      <HelmetSeo
        title="Radschnellverbindungen"
        description="Hier entsteht die Informationsstelle für Radschnellverbindungen in Deutschland"
      />
      <Hero
        highlightedTitle="Radschnellverbindungen"
        title="schneller planen und bauen"
        description="Wir helfen Koordinator:innen durch frühzeitig ansetzende
        Partizipation bei Radschnellverbindungen und beschleunigen deren Umsetzung erheblich."
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
            <ButtonLink
              to="/projekt-hintergrund"
              className="btn-brand-outline w-full px-8 py-3 shadow md:text-lg"
            >
              Projekt-Hintergrund
            </ButtonLink>
          </div>
        </>
      </Hero>
      <TextWithImage
        image={
          <StaticImage
            src="./index/rs1-Radschnellweg_Ruhr_in_Muelheim.jpg"
            alt="Zeigt den RS1 in NRW"
          />
        }
        imageCredits="Mmflooki - Wikimedia Commons (CC BY-SA 4.0)"
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
        image={
          <StaticImage
            src="./index/stock-netherland-cycling.jpg"
            alt="Zwei Fahrradfahrende Menschen"
          />
        }
        imageCredits=""
        title="RSV-Baukasten"
        caption="Projektansatz"
      >
        <>
          <p>
            Mit dem RSV-Baukasten entsteht ein modulares System zur Durchführung
            von Online-Beteiligungsformaten und Bürgerinformation zu
            Radschnellverbindungen, das Bedarfe und Wissen konstruktiv in
            Planungsprozesse einfließen lässt. Grundlage ist ein dynamisches
            Online-Kartenformat das Informationen zu den geplanten
            Radschnellverbindungen übersichtlich aufbereitet und
            Beteiligungsinstrumente daran anbindet.
          </p>
          <div className="mt-5">
            <strong>Zentrale Ziele des geplanten RSV-Baukastens:</strong>
            <ul className="ml-5 list-disc">
              <li>
                Passgenaue Online-Beteiligungsformate zur effektiven Einbindung
                der Bürger:innen bei RSV-Planungen.
              </li>
              <li>
                Verbesserte Kommunikation von RSV-Planungen in der
                Öffentlichkeit und Steigerung der Akzeptanz von
                Planungsprojekten.
              </li>
              <li>
                Beschleunigung der Errichtung von Radschnellverbindungen durch
                zentralen Informationsaustausch und Kommunikationsschnittstellen
                auf Ebene der Planenden.
              </li>
            </ul>
          </div>
        </>
      </TextWithImage>
      <TextWithImage
        image={
          <StaticImage
            src="./index/stock-telephone.jpg"
            alt="Altes Telefon mit Wählscheibe"
          />
        }
        imageCredits=""
        title="Kontakt"
        caption="Hintergrund"
      >
        <>
          <p>
            Wenn Sie Interesse an einer Zusammenarbeit im Rahmen des Projektes
            oder sich weitere Hintergründe zum Projekt wünschen, schreiben Sie
            mir an{' '}
            <ExternalLink href="mailto:hekele@radschnellverbindungen.info">
              <strong>hekele@radschnellverbindungen.info</strong>
            </ExternalLink>
          </p>

          <p className="mt-5 text-slate-800">
            <strong>Boris Hekele, Projektleiter</strong>
          </p>
        </>
      </TextWithImage>
      <TextWithImage
        image={
          <StaticImage src="./index/stock-euro.jpg" alt="Euro Geldscheine" />
        }
        imageCredits=""
        title="Förderübersicht"
        caption=""
      >
        <>
          <p>
            Auf der Übersichtsseite zu Fördermitteln finden Sie die wichtigsten
            Informationen zu Förderprogrammen im Kontext von
            Radschnellverbindungen und Partizipation in Bund und Land.
          </p>
          <ButtonLink to="/foerderungen" className="btn-brand-outline mt-5">
            Zur Förderübersicht
          </ButtonLink>
        </>
      </TextWithImage>
    </Layout>
  );
};
export default IndexPage;
