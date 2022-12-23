import classNames from 'classnames';
import React from 'react';
import { textLinkClasses } from './TextLink';

type Props = {
  mailto?: `${string}@${string}`;
  className?: string;
  subject?: string;
  body?: string;
  children: React.ReactNode;
};

export const MailLink: React.FC<Props> = ({
  mailto,
  className,
  subject,
  body,
  children,
}) => {
  const params = [
    subject && `subject=${encodeURIComponent(subject)}`,
    body && `body=${encodeURIComponent(body)}`,
  ].filter(Boolean);

  const href = `mailto:${mailto || children}${
    params && `?${params.join('&')}`
  }`;

  return (
    <a href={href} className={classNames(className, textLinkClasses)}>
      {children}
    </a>
  );
};
