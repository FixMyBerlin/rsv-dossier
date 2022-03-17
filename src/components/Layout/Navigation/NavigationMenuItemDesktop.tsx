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
        { 'font-bold text-emerald-500': active },
        { ' text-slate-500  hover:text-slate-700': !active },
        'text-md inline-flex items-center px-1 pt-1 font-medium'
      )}
    >
      {name}
    </Link>
  );
};
