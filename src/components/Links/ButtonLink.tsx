import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

type ButtonSizes = 'sm' | 'md' | 'lg';

type Props = {
  to: string;
  className?: string;
  newWindow?: boolean;
  size?: ButtonSizes;
  outline?: boolean;
};

// TODO: Refactor all those link components to share more logic
export const ButtonLink: React.FC<Props> = ({
  to,
  className = '',
  newWindow = false,
  outline = false,
  size = 'md',
  children,
}) => {
  const styles = classNames(
    className,
    { 'btn-brand-outline': outline },
    { 'w-full px-8 py-3 md:text-lg': size === 'lg' },
    { 'px-3 py-1 text-sm font-medium': size === 'sm' },
    'btn-brand'
  );

  if (newWindow) {
    return (
      <a href={to} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
};
