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
        'text-md relative inline-flex items-center px-1 pt-1 font-medium before:absolute before:bottom-0 before:left-0 before:block before:h-1 before:w-full before:origin-top-left before:scale-x-0 before:bg-emerald-500 before:transition-transform before:duration-300 before:ease-out before:content-[""] before:hover:scale-x-100'
      )}
    >
      {name}
    </Link>
  );
};
