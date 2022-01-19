import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '~/components/Layout/Layout';

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1 className="text-3xl font-bold underline">Bike bike bike</h1>
    </Layout>
  );
};

export default IndexPage;
