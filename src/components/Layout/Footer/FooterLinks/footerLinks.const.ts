import { navigationLinks } from '../../Navigation/navigationLinks.const';

export type footerMenuItemProps = { name: string; to: string };
type footerMenuProp = {
  [key: string]: footerMenuItemProps[];
};

export const footerLinks: footerMenuProp = {
  content: navigationLinks,
  formal: [
    // { name: 'Kontakt', to: '/kontakt/' },
    { name: 'Datenschutz', to: '/datenschutz/' },
    { name: 'Impressum', to: '/impressum/' },
  ],
};
