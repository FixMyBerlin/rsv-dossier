import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
}

export const H1: React.FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={clsx([
        'mt-7 break-words text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl sm:leading-tight',

        className,
      ])}
    >
      {children}
    </h1>
  )
}

export const H2: React.FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={clsx([
        'mt-6 text-2xl font-extrabold leading-tight sm:text-4xl sm:leading-tight',
        className,
      ])}
    >
      {children}
    </h2>
  )
}

export const H3: React.FC<Props> = ({ children, className }) => {
  return (
    <h3
      className={clsx([
        'text-x mt-5 font-extrabold leading-tight sm:text-3xl sm:leading-tight',
        className,
      ])}
    >
      {children}
    </h3>
  )
}
export const H4: React.FC<Props> = ({ children, className }) => {
  return (
    <h4 className={clsx(['mt-5 text-lg font-extrabold sm:text-2xl', className])}>{children}</h4>
  )
}
