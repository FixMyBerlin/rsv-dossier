import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout/Layout';

const AboutPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo title="Über uns" description="TODO" image="TODO" />
      <h1>Über uns</h1>
    </Layout>
  );
};

export default AboutPage;
