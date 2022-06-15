import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutArticle } from '~/components/Layout';

const ProjectBackground: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <HelmetSeo
        title="Projekt Hintergrund"
        description="TODO"
        image="TODO"
        noindex
      />
      <h1>Projekt Hintergrund</h1>
    </LayoutArticle>
  );
};

export default ProjectBackground;
