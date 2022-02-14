import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { LayoutArticle } from '~/components/Layout';

const DatenschutzPage = () => {
  return (
    <LayoutArticle>
      <HelmetSeo noindex title="Datenschutz" />
      <h1>Datenschutz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        dolorem fuga excepturi expedita delectus neque, soluta in vitae
        perspiciatis amet provident a quaerat nemo suscipit quasi debitis
        impedit, fugiat officiis.
      </p>
      <h2>Tracking Opt-Out (Matomo)</h2>
      <iframe
        title="Matomo Opt Out Tracking"
        style={{ border: '0', height: '200px', width: '600px' }}
        src="https://s.radschnellverbindungen.info/index.php?module=CoreAdminHome&action=optOut&language=de&backgroundColor=f0fdf4&fontColor=374151&fontSize=16px&fontFamily=Overpass"
      />
    </LayoutArticle>
  );
};

export default DatenschutzPage;
