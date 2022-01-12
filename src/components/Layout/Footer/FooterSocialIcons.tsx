import React from 'react';
import { footerSocialIcons } from './footerSocialIcons.const';

export const FooterSocialIcons = () => {
  return (
    <div className="flex space-x-6 md:order-2">
      {footerSocialIcons.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 hover:text-gray-300"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};
