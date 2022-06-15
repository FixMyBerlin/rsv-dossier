export type navigationMenuItemProps = { name: string; to: string };

export const navigationLinks: navigationMenuItemProps[] = [
  { name: 'Steckbriefe', to: '/steckbriefe/' },
  {
    name: 'Feedback geben',
    to: 'mailto:feedback@fixmycity.de?subject=Feedback Radschnellverbindungen',
  },
];
