export type navigationMenuItemProps = { name: string; to: string }

export const navigationLinks: navigationMenuItemProps[] = [
  { name: 'Start', to: '/' },
  { name: 'Steckbriefe', to: '/steckbriefe/' },
  { name: 'Kommunikation', to: '/kommunikation/' },
  { name: 'Planung', to: '/planung/' },
  {
    name: 'Feedback geben',
    to: 'mailto:feedback@fixmycity.de?subject=Feedback Radschnellverbindungen',
  },
]
