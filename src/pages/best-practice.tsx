import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout/Layout';

const BestPracticePage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo title="Best Practice" description="TODO" image="TODO" />
      <h1>Best Practice</h1>
    </Layout>
  );
};

export default BestPracticePage;
