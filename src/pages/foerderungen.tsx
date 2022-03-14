import React from 'react';
import { PageProps } from 'gatsby';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { FundingDetails, FundingHero } from '~/components/Funding';
import { Stats } from '~/types/Stats';
import {
  InformationCircleIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';

const stats: Stats[][] = [
  [
    {
      title: 'Wo ist das Projekt',
      number: 'Berlin - Potsdam',
      icon: <LocationMarkerIcon width={25} />,
    },
    {
      title: 'Vorraussichtliche Fertigstellung',
      number: 'Juli 2025',
      icon: <CalendarIcon width={25} />,
    },
    {
      title: 'Information',
      number: 'Lorem ipsum',
      icon: <InformationCircleIcon width={25} />,
    },
  ],
  [
    {
      title: 'Region',
      number: 'Baden-Württemberg',
      icon: <LocationMarkerIcon width={25} />,
    },
    {
      title: 'Vorraussichtliche Fertigstellung',
      number: 'August 2028',
      icon: <CalendarIcon width={25} />,
    },
    {
      title: 'Information',
      number: 'Lorem ipsum',
      icon: <InformationCircleIcon width={25} />,
    },
  ],
];

const FundingPage: React.VFC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo title="Förderübersicht" description="" image="" />
      <FundingHero
        title="Förderübersicht"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium."
      />

      <FundingDetails stats={stats[0]} title="Name des Förderprogramms">
        <p>
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
          urna sed consectetur neque tristique pellentesque. Blandit amet, sed
          aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
          porttitor vitae ut. Amet vitae fames senectus vitae.
        </p>
      </FundingDetails>

      <FundingDetails stats={stats[1]} title="Name des Förderprogramms">
        <p>
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
          urna sed consectetur neque tristique pellentesque. Blandit amet, sed
          aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
          porttitor vitae ut. Amet vitae fames senectus vitae.
        </p>
      </FundingDetails>
    </Layout>
  );
};

export default FundingPage;
