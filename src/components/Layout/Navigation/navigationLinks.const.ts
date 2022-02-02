export type navigationMenuItemProps = { name: string; to: string };

export const navigationLinks: navigationMenuItemProps[] = [
  { name: 'Start', to: '/' },
  { name: 'Karte', to: '/karte/' },
  { name: 'Projekte', to: '/projekte/' },
  {
    name: 'Förderübersicht',
    to: '/foerderuebersicht/',
  },
  { name: 'Über uns', to: '/ueber-uns/' },
];
