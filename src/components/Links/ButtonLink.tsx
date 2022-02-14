import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

type Props = { to: string; className?: string; newWindow?: boolean };

// TODO: Refactor all those link components to share more logic
export const ButtonLink: React.FC<Props> = ({
  to,
  className = '',
  newWindow = false,
  children,
}) => {
  const styles = classNames(className, 'btn-brand');

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
