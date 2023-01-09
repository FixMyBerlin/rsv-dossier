import classNames from 'classnames';
import React from 'react';
import { WindowLocation } from '@reach/router';
import { navHeightClasssName, Navigation } from './Navigation';

type Props = {
  className?: string;
  location?: WindowLocation<unknown>; // TODO: define type
};

// TODO: Maybe we need to prevent the layout from unmounting, see https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
export const LayoutSteckbrief: React.FC<Props> = ({
  className = '',
  location = '',
  children,
}) => {
  return (
    <div className="flex h-full flex-col">
      <Navigation location={location} fixed />
      <div className={classNames(navHeightClasssName, 'flex-none')} />
      <main className={classNames(className, 'z-0 flex-grow bg-white')}>
        {children}
      </main>
    </div>
  );
};
