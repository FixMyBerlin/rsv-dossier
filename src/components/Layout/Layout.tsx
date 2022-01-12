import React from 'react';
import { Footer, Navigation } from '.';
import Helmet from 'react-helmet';

type Props = {
  navigation?: boolean;
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Layout: React.FC<Props> = ({ navigation = true, children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          class: 'h-full',
        }}
        bodyAttributes={{
          class: 'h-full',
        }}
      />
      <div className="h-full flex flex-col">
        {navigation && <Navigation />}
        <main className="p-5 bg-red-50 flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
