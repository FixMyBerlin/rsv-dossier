import classNames from 'classnames';
import React from 'react';

type Props = {
  href: string;
  className?: string;
  newWindow?: boolean;
  title?: string;
};

export const ExternalLink: React.FC<Props> = ({
  href,
  children,
  className = '',
  newWindow = true,
  title = '',
}) => {
  const props = newWindow && {
    target: '_blank',
  };

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      {...props}
      className={classNames(className, 'hover:underline active:underline')}
      title={title}
    >
      {children}
    </a>
  );
};
