import { selectLinkStyle } from './styles'
import type { LinkProps } from './types'

type Props = {
  mailto?: `${string}@${string}`
  className?: string
  subject?: string
  body?: string
  children: React.ReactNode
  button?: LinkProps['button']
}

export const MailLink: React.FC<Props> = ({
  mailto,
  className,
  subject,
  body,
  children,
  button,
}) => {
  const params = [
    subject && `subject=${encodeURIComponent(subject)}`,
    body && `body=${encodeURIComponent(body)}`,
  ].filter(Boolean)
  const href = `mailto:${mailto || children}${params && `?${params.join('&')}`}`

  return (
    <a href={href} className={selectLinkStyle(button, className)}>
      {children}
    </a>
  )
}
