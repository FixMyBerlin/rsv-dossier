import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout/Layout';
import ConstructionIcon from '/static/construction-icon.svg';
import FixMyCityLogo from '/static/FixMyCity_Logo.svg';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo
        title="Radschnellwege"
        description="Hier entsteht die Informationsstelle für Radschnellverbindungen in Deutschland"
      />
      <div className="">
        <ConstructionIcon className="m-auto flex h-24 w-24" />
      </div>
      <h1 className="mt-5 text-center text-3xl font-bold">
        Hier ist Baustelle
      </h1>
      <div className="text-center">
        Sie werden hier in Zukunft Informationen über Radschnellverbindungen in
        Deutschland finden. <br /> Diese Plattform wird von FixMyCity
        entwickelt.
      </div>
      <div className="mt-5 text-center">
        <a
          href="https://www.fixmycity.de"
          role="button"
          className="btn-brand m-auto inline-flex items-center"
        >
          Zur &nbsp; <FixMyCityLogo className="h-5 w-5" />
          FixMyCity Website
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
