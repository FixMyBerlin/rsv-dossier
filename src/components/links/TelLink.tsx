import { selectLinkStyle } from './styles'

type Props = {
  tel?: `+${string}`
  className?: string
  subject?: string
  body?: string
  children: React.ReactNode
}

export const TelLink: React.FC<Props> = ({ tel, className, subject, body, children }) => {
  const params = [
    subject && `subject=${encodeURIComponent(subject)}`,
    body && `body=${encodeURIComponent(body)}`,
  ].filter(Boolean)

  const href = `tel:${tel || children}${params && `?${params.join('&')}`}`

  return (
    <a href={href} className={selectLinkStyle(undefined, className)}>
      {children}
    </a>
  )
}
