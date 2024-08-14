import Link from '@components/links/Link'
import { menuLinkStyles, selectedMenuLinkStyles } from '@components/links/styles'

type Props = { currentPage: string; name: string; to: string }

export const NavigationMenuItemDesktop: React.FC<Props> = ({ currentPage, name, to }) => {
  const active = currentPage.startsWith(to)

  return (
    <Link href={to} className={active ? selectedMenuLinkStyles : menuLinkStyles}>
      {name}
    </Link>
  )
}
