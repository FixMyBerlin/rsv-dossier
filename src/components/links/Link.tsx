import { selectLinkStyle } from './styles'
import type { LinkProps } from './types'

interface LinkPropsReact extends LinkProps {
  children: React.ReactNode
}

const Link: React.FC<LinkPropsReact> = ({
  href,
  className,
  classNameOverwrites,
  external,
  blank = undefined,
  button,
  children,
}) => {
  const isExternal = external || href.startsWith('http')
  const target = blank ? '_blank' : undefined
  const rel = isExternal ? 'noopener noreferrer' : undefined
  const linkClass = classNameOverwrites || selectLinkStyle(button, className)

  return (
    <a href={href} className={linkClass} target={target} rel={rel}>
      {children}
    </a>
  )
}

export default Link
