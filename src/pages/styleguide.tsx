import { PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutArticle } from '~/components/Layout';
import { ButtonLink } from '~/components/Links/ButtonLink';
import { ExternalLink } from '~/components/Links/ExternalLink';
import { TextLink } from '~/components/Links/TextLink';

const KontaktPage: React.FC<PageProps> = () => {
  return (
    <>
      <HelmetSeo noindex title="Kontakt" />
      {/* <Layout>
      <h1>Layout</h1>
    </Layout> */}
      <LayoutArticle>
        <h1>LayoutArticle</h1>
        <p>
          <TextLink to="/">Interner Link</TextLink>
          <ExternalLink href="https://www.fixmycity.de">
            Externer Link
          </ExternalLink>
        </p>
        <p>
          <ButtonLink to="/">Button Link</ButtonLink>
        </p>
        <p>
          <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing
          elit. Voluptate dolorem fuga excepturi expedita delectus neque, soluta
          in vitae perspiciatis amet provident a quaerat nemo suscipit quasi
          debitis impedit, fugiat officiis.
        </p>
      </LayoutArticle>
    </>
  );
};

export default KontaktPage;
