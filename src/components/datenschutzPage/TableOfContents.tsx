import React from 'react'

import { selectLinkStyle } from '@components/links/styles'

export type TocHash = `#${string}`
export type TocHashLink = [TocHash, string | React.ReactNode][]
type Props = { items: TocHashLink }

export const TableOfContents: React.FC<Props> = ({ items }) => {
  return (
    <nav className="my-6">
      <h2 className="xl:hidden">Inhaltsverzeichnis</h2>
      <ul className="xl:m-0 xl:list-none xl:p-0">
        {items.map(([itemHash, itemlink]) => (
          <li key={itemHash} className="my-0">
            <a
              href={itemHash}
              className={selectLinkStyle(undefined, 'block w-full py-1.5 leading-5')}
            >
              {itemlink}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
