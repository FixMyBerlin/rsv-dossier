import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

type Props = { currentPage: string; name: string; to: string };

export const NavigationMenuItemDesktop: React.FC<Props> = ({
  currentPage,
  name,
  to,
}) => {
  const active = currentPage === to;

  return (
    <Link
      to={to}
      className={classNames(
        { 'border-indigo-500 text-gray-900': active },
        {
          'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
            !active,
        },
        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
      )}
    >
      {name}
    </Link>
  );
};
