import classNames from 'classnames';
import React from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

type Props = {
  className?: string;
  location?: any; // TODO: define type
  navigation?: boolean;
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const Layout: React.FC<Props> = ({
  className = '',
  navigation = true,
  location = '',
  children,
}) => {
  return (
    <div className="flex h-full flex-col">
      {navigation && <Navigation location={location} />}
      {navigation && (
        <main className={classNames(className, 'z-0 flex-grow bg-white')}>
          {children}
        </main>
      )}
      {!navigation && (
        <main className={classNames(className, 'z-0 flex-grow bg-white')}>
          {children}
        </main>
      )}
      <Footer />
    </div>
  );
};
