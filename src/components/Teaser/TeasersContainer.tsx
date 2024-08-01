type Props = {
  children: React.ReactNode
}

export const TeasersContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3">
      {children}
    </div>
  )
}
