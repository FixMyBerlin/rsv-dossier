import React from 'react';

type Props = {
  href: string;
  className?: string;
  newWindow?: boolean;
  title?: string;
};

export const ExternalImageLink: React.FC<Props> = ({
  href,
  children,
  className = '',
  newWindow = true,
  title = '',
}) => {
  const props = newWindow && {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      {...props}
      className={className}
      title={title}
    >
      {children}
    </a>
  );
};
