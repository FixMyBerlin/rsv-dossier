import React from 'react';
import { Footer, Navigation } from '.';
import classNames from 'classnames';

type Props = {
  className?: string;
  location?: any; // TODO: define type
  padding?: boolean;
  navigation?: boolean;
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Layout: React.FC<Props> = ({
  className = '',
  navigation = true,
  location,
  padding = true,
  children,
}) => {
  return (
    <>
      <div className="h-full flex flex-col">
        {navigation && <Navigation location={location} />}
        <main
          className={classNames(
            className,
            { 'p-5 pt-14': padding },
            'bg-green-50 flex-grow shadow-md shadow-green-900/20 z-0'
          )}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
