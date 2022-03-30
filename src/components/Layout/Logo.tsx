import classNames from 'classnames';
import React from 'react';
import RsvLogo from '~/images/logo-rsv-info.svg';

type Props = {
  className?: string;
};

export const Logo: React.VFC<Props> = ({ className }) => {
  return (
    <img
      className={classNames('h-24 w-auto', className)}
      src={RsvLogo}
      alt="Radschnellverbindungen.info Logo"
    />
  );
};
