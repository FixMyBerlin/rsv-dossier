import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  to: string;
  className?: string;
  newWindow?: boolean;
  children?: React.ReactNode;
};

export const textLinkClasses =
  'text-emerald-700 hover:text-emerald-800 hover:underline active:underline';

export const TextLink: React.FC<Props> = ({
  to,
  className,
  newWindow = false,
  children,
}) => {
  if (newWindow) {
    return (
      <a
        href={to}
        className={classNames(className, textLinkClasses)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classNames(className, textLinkClasses)}>
      {children}
    </Link>
  );
};
