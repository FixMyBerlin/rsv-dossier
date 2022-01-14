export type navigationMenuItemProps = { name: string; to: string };

export const navigationLinks: navigationMenuItemProps[] = [
  { name: 'Start', to: '/' },
  { name: 'Best Practice', to: '/best-practice/' },
  { name: 'Fachinformationen', to: '/fachinformationen/' },
  {
    name: 'Radschnellwege',
    to: '/radschnellwege/',
  },
  { name: 'Kontakt', to: '/kontakt/' },
];
