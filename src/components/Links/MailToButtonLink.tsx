import { MailIcon } from '@heroicons/react/outline';
import React from 'react';
import { ButtonLink } from './ButtonLink';

type Props = {
  mailto: string;
  subject?: string;
  className?: string;
};

export const MailToButtonLink: React.FC<Props> = ({
  mailto,
  children,
  className = '',
  subject = '',
}) => {
  return (
    <ButtonLink
      to={`mailto:${mailto}${subject ? `?subject=${subject}` : ''}`}
      className={className}
    >
      <MailIcon style={{ height: '1.5rem' }} className="mr-3 self-start" />
      {children}
    </ButtonLink>
  );
};
