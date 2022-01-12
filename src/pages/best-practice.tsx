import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '~/components/Layout/Layout';

export const BestPracticePage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>Best Practise</h1>
    </Layout>
  );
};

export default BestPracticePage;
