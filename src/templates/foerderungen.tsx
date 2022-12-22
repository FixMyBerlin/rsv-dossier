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
  CurrencyEuroIcon,
  MapIcon,
  ClipboardCheckIcon,
} from '@heroicons/react/outline';
import BmdvLogo from './bmdv-logo.svg';

const stats: Stats[][] = [
  [
    {
      title: 'Wo ist das Projekt',
      number: 'Berlin - Potsdam',
      icon: <LocationMarkerIcon />,
    },
    {
      title: 'Vorraussichtliche Fertigstellung',
      number: 'Juli 2025',
      icon: <CalendarIcon />,
    },
    {
      title: 'Information',
      number: 'Lorem ipsum',
      icon: <InformationCircleIcon />,
    },
  ],
  [
    {
      title: 'Region',
      number: 'Baden-Württemberg',
      icon: <LocationMarkerIcon />,
    },
    {
      title: 'Vorraussichtliche Fertigstellung',
      number: 'August 2028',
      icon: <CalendarIcon />,
    },
    {
      title: 'Information',
      number: 'Lorem ipsum',
      icon: <InformationCircleIcon />,
    },
  ],
];

const heroStats: Stats[] = [
  {
    title: 'Wo ist das Projekt',
    number: '16 Mio. €',
    icon: <CurrencyEuroIcon />,
  },
  {
    title: 'Vorraussichtliche Fertigstellung',
    number: '120 km',
    icon: <MapIcon />,
  },
  {
    title: 'Information',
    number: '34 Anträge',
    icon: <ClipboardCheckIcon />,
  },
  {
    title: 'Information',
    number: '57 Gemeinden',
    icon: <LocationMarkerIcon />,
  },
];

const FundingPage: React.VFC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo title="Förderübersicht" description="" image="" />
      <FundingHero
        title="Förderübersicht"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium."
        stats={heroStats}
      />

      <FundingDetails
        stats={stats[0]}
        title="Stadt und Land"
        svg={<BmdvLogo />}
        categories={{
          Machbarkeitsstudie: true,
          Kommunikation: true,
          Infrastruktur: false,
          Personal: false,
        }}
      >
        <p>
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
          urna sed consectetur neque tristique pellentesque. Blandit amet, sed
          aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
          porttitor vitae ut. Amet vitae fames senectus vitae.
        </p>
      </FundingDetails>

      <FundingDetails
        stats={stats[1]}
        title="Name des Förderprogramms"
        categories={{
          Machbarkeitsstudie: true,
          Kommunikation: false,
          Infrastruktur: false,
          Personal: true,
        }}
      >
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
