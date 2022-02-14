import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutArticle } from '~/components/Layout';

const FundingPage: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <HelmetSeo title="Fachinformationen" description="TODO" image="TODO" />
      <h1>Förderungen</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        dolorem fuga excepturi expedita delectus neque, soluta in vitae
        perspiciatis amet provident a quaerat nemo suscipit quasi debitis
        impedit, fugiat officiis.
      </p>
    </LayoutArticle>
  );
};

export default FundingPage;
