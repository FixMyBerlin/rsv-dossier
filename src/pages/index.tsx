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
        Das NRVP-Forschungsprojekt RSV-Baukasten will deren Wissen konstruktiv
        einbinden und sie auf einem Kenntnisstand halten.
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
            src="./index/rs1-Radschnellweg_Ruhr_in_Muelheim.jpg"
            alt="Zeigt den RS1 in NRW"
          />
        }
        imageCredits="Mmflooki - Wikimedia Commons (CC BY-SA 4.0)"
        title="Projektansatz und Zielsetzung"
        caption="Mehr zum Forschungsprojekt"
      >
        <p>
          Mit dem RSV-Baukasten entsteht ein modulares System zur Durchführung
          von Beteiligungsformaten für interne und externe Stakeholder sowie zur
          Bürgerinformation für die verschiedenen Planungsphasen von
          Radschnellverbindungen.
        </p>
        <p>
          Durch eine anschauliche und verständliche Kommunikation mittels
          kartengestützter Formate soll die Akzeptanz von RSV-Planungsprojekten
          erhöht werden. Das System soll die behörden- und gemeindeübergreifende
          interne Kommunikation und Abstimmung zu Machbarkeitsstudien und
          Vorplanungen unterstützen und damit für eine frühzeitige
          Beschleunigung des Prozesses sorgen.
        </p>
        <p>
          Grundlage ist ein dynamisches Online-Kartenformat das Informationen zu
          Radschnellverbindungen übersichtlich aufbereitet und
          Beteiligungsinstrumente daran anbindet.
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
        title="RSV-Steckbriefe"
        caption="Übersicht"
      >
        <>
          <p>
            In Deutschland werden aktuell eine Vielzahl von
            Radschnellverbindungen geplant und sind in Teilen bereits umgesetzt.
          </p>
          <p>
            In unseren Steckbriefen finden Sie eine systematische Übersicht
            aller Radschnellverbindungen sowie deren geplante Trassenverläufe
            bzw. -korridore. Sie bekommen so Einblick welche Städte und
            Gemeinden durch Radschnellverbindungen miteinander verbunden werden
            bzw. in Planungskorridoren liegen.
          </p>
          <p>
            <ButtonLink to="/steckbriefe" className="btn-brand-outline mt-5">
              Zu den Steckbriefen
            </ButtonLink>
          </p>
        </>
      </TextWithImage>
      <TextWithImage
        image={
          <StaticImage
            src="./index/stock-netherland-cycling.jpg"
            alt="Zwei Fahrradfahrende Menschen"
          />
        }
        imageCredits=""
        title="Klimaziele und Förderungen"
        caption="Hintergrund"
      >
        <>
          <p>
            Radschnellverbindungen sind in Deutschland als Infrastrukturelement
            verhältnismäßig neu. Sie entwickeln sich seit dem verstärkten
            Aufkommen der Elektromobilität bei Fahrrädern und dem akuten
            Handlungsbedarf zur Erreichung von Klimaschutzzielen jedoch rasant
            zu einem politischen und planerischen Instrument mit hohem Potential
            und großer Akzeptanz. Die hohe Zahl von Machbarkeitsstudien und
            Vorplanungen in Kommunen in Deutschland bestätigt dies.
          </p>
          <p>
            Das Fahrrad wird für Pendler:innen immer stärker zur Alternative zum
            individuellem Kfz, das sich durch steigende Energiekosten und
            Stauzeiten vom Kosten-Nutzen-Verhältnis immer weniger rechnet.
          </p>
          <ButtonLink to="/foerderungen" className="btn-brand-outline mt-5">
            Mehr unter &ldquo;Hintergrund&rdquo;
          </ButtonLink>
          <br />
          <br />
          <hr />
          <br />
          <p>
            Auf der Übersichtsseite zu Fördermitteln finden Sie die wichtigsten
            Förderprogramme in Bund und Ländern.
          </p>
          <ButtonLink to="/foerderungen" className="btn-brand-outline mt-5">
            Zur Förderübersicht
          </ButtonLink>
        </>
      </TextWithImage>
      <TextWithImage
        image={
          <StaticImage
            src="./index/stock-telephone.jpg"
            alt="Altes Telefon mit Wählscheibe"
          />
        }
        noImageDropShadow
        title="Projektpartner und Kontakt"
        caption="Informiert bleiben"
      >
        <>
          <p>
            LOGO FIXMYCITY
            <br />
            LOGO PARTNER1
            <br />
            LOGO PARTNER2
            <br />
            <br />
          </p>
          <p>
            Wenn Sie sich mehr Informationen zum Projekt wünschen oder stärker
            im Forschungsprojekt involviert sein wollen, kontaktieren Sie uns
            gerne.
          </p>
          <p>
            <ButtonLink
              to="mailto:hello@fixmycity.de?subject=Anliegen zum RSV-Baukasten"
              className="btn-brand-outline mt-5"
            >
              Mail an hello@fixmycity.de schreiben
            </ButtonLink>
          </p>
        </>
      </TextWithImage>
    </Layout>
  );
};
export default IndexPage;
