import Link from '@components/links/Link'
import type { footerMenuItemProps } from './footerLinks.const'

type Props = {
  title?: string
  linkList: footerMenuItemProps[]
  className?: string
}

export const FooterLinkList: React.FC<Props> = ({ title, linkList, className = '' }) => {
  return (
    <div className={className}>
      {title && (
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-800">{title}</h3>
      )}
      <ul className="mt-4 space-y-4">
        {linkList.map((item) => (
          <li key={item.name}>
            <Link href={item.to} className="text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
