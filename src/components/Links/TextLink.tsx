import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

type Props = { to: string; className?: string; newWindow?: boolean };

export const TextLink: React.FC<Props> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={classNames(
        className,
        'text-blue-500 hover:text-blue-600 hover:underline active:underline'
      )}
    >
      {children}
    </Link>
  );
};
