export type footerMenuItemProps = { name: string; to: string };
type footerMenuProp = {
  [key: string]: footerMenuItemProps[];
};

export const footerLinks: footerMenuProp = {
  content: [
    { name: 'Best Practice', to: '/best-practice/' },
    { name: 'Fachinformationen', to: '/fachinformationen/' },
    {
      name: 'Übersicht Radschnellwege',
      to: '/radschnellwege/',
    },
  ],
  formal: [
    { name: 'Kontakt', to: '/kontakt/' },
    { name: 'Datenschuzt', to: '/datenschutz/' },
  ],
};
