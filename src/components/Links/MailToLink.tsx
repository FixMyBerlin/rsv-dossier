import classNames from 'classnames';
import React from 'react';

type Props = {
  mailto: string;
  subject?: string;
  className?: string;
  title?: string;
};

export const MailToLink: React.FC<Props> = ({
  mailto,
  children,
  className = '',
  title = '',
  subject = '',
}) => {
  return (
    <a
      href={`mailto:${mailto}${subject ? `?subject=${subject}` : ''}`}
      rel="noopener noreferrer"
      className={classNames(className, 'hover:underline active:underline')}
      title={title}
    >
      {children}
    </a>
  );
};
