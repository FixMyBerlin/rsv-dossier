import React from 'react';
import { TextLink } from '~/components/Links';
import { TocHashLink } from './types';

type Props = { items: TocHashLink };

export const TableOfContents: React.FC<Props> = ({ items }) => {
  return (
    <nav className="xl:not-prose xl:fixed xl:left-0 xl:top-28 xl:z-10 xl:w-60 xl:rounded xl:rounded-l-none xl:bg-white xl:px-4 xl:py-3 xl:shadow-lg">
      <h2 className="xl:hidden">Inhaltsverzeichnis</h2>
      <ul className="xl:m-0 xl:list-none xl:p-0">
        {items.map(([itemHash, itemlink]) => (
          <li key={itemHash} className="my-0">
            <TextLink to={itemHash} className="block w-full py-1.5 leading-5">
              {itemlink}
            </TextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
