import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Hero } from '~/components/Layout/Hero/Hero';
import { Layout } from '~/components/Layout/Layout';
import { SplitContent } from '~/components/Layout/Section/SplitContent';
import { RSVDetails } from '~/components/Layout/Section/RSVDetails';
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
      <div className="p-5">
        <SplitContent
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/RS1_Radschnellweg_Ruhr_in_M%C3%BClheim_2.jpg/800px-RS1_Radschnellweg_Ruhr_in_M%C3%BClheim_2.jpg?uselang=de"
          mainStory="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur deserunt voluptatibus."
          title="Deutschland wird Fahrradland"
          enableStats
        />
      </div>
      <div className="p-5">
        <SplitContent
          imageUrl="https://images.unsplash.com/photo-1541687664971-639c2f8b63f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          mainStory="Als Radschnellwege werden in Baden-Württemberg Radschnellverbindungen bezeichnet und wie folgt definiert:[1]

          Gesamtstrecke mindestens fünf Kilometer
          Potenzial von mindestens 2000 Fahrradfahrten täglich (im Durchschnitt außerorts)
          Breite mindestens zwischen drei Metern (Richtungsverkehr) und vier Metern (Zweirichtungsverkehr)
          in der Regel von anderen Verkehrsmitteln getrennt
          Routen möglichst kreuzungsfrei oder mit minimalen Wartezeiten an Kreuzungen
          Hohe Belagqualität und eine möglichst geringe Steigung

      2017 beschloss das baden-württembergische Verkehrsministerium, drei Radschnellverbindungen zu realisieren, bei denen das Land Bauherr sein und die Baulast übernehmen soll: Heidelberg-Mannheim, Heilbronn-Neckarsulm-Bad Wimpfen und Stuttgart-Esslingen-Plochingen. Für diese drei „Pilotstrecken“ wurde prioritär mit der Planung und dem Bau begonnen.[2][3] Laut einer Pressemitteilung des Ministeriums für Verkehr vom September 2018 wurden in einer landesweiten Potentialanalyse „32 Radschnellwege mit einer Gesamtlänge von 500 Kilometer im vordringlichen Bedarf identifiziert. Weitere 20 Strecken könnten sich durch lokalspezifische Faktoren als würdig für eine Radschnellverbindung erweisen.“ Insgesamt sollen bis 2025 zunächst zehn Radschnellwege in Baden-Württemberg realisiert werden.[4]"
          title="Hintergrund"
        />
      </div>
      <div className="p-5">
        <RSVDetails
          imageUrl="https://images.unsplash.com/photo-1541687664971-639c2f8b63f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          summary="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          title="RSV 1: Hamburg - Lübeck"
          stats={{
            costs: 'Kosten',
            length: 'Länge',
            community: 'Gemeinde',
            duration: 'Zeitraum',
          }}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
