import React from 'react';
import { ExternalLink } from '~/components/Links/ExternalLink';
import { activeFooterSocialIcons } from './footerSocialIcons.const';

export const FooterSocialIcons = () => {
  return (
    <div className="flex space-x-6 md:order-2">
      {activeFooterSocialIcons.map((item) => (
        <ExternalLink
          key={item.name}
          href={item.href}
          className="text-slate-400 hover:text-slate-300"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </ExternalLink>
      ))}
    </div>
  );
};
