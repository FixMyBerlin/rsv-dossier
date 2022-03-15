import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout/Layout';

const ProjectBackground: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo title="Projekt Hintergrund" description="TODO" image="TODO" />
      <h1>Projekt Hintergrund</h1>
    </Layout>
  );
};

export default ProjectBackground;
