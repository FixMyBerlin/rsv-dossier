import classNames from 'classnames';
import React from 'react';
import { Stats } from '~/types/Stats';
import { FundingStats } from '.';

type FundingCategories = {
  Machbarkeitsstudie: boolean;
  Kommunikation: boolean;
  Infrastruktur: boolean;
  Personal: boolean;
};

type Props = {
  title: string;
  stats?: Stats[];
  categories?: FundingCategories;
  imageUrl?: string;
  imageAlt?: string;
  svg?: JSX.Element;
  children?: React.ReactNode;
};

// Image Display is either possible via SVG element OR image url
export const FundingDetails: React.FC<Props> = ({
  title,
  svg,
  imageUrl = '',
  imageAlt = '',
  stats = [],
  categories,
  children,
}) => {
  return (
    <div className="flex flex-col bg-white pt-10 md:flex-row">
      <div className="max-w-4xl bg-gray-50 px-4 py-8 sm:px-6 sm:py-12 md:rounded-r-xl lg:max-w-6xl lg:py-10">
        <div className="mx-auto max-w-2xl lg:ml-auto lg:mr-0 lg:w-2/3 lg:max-w-none lg:pl-10">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 text-lg text-gray-500">{children}</div>
          {stats && <FundingStats stats={stats} />}
        </div>
      </div>
      <div className="mx-10 flex flex-col sm:flex-row md:block">
        {imageUrl && (
          <div className="max-h-50 mb-5 w-full">
            <img
              className="mx-auto h-full w-full object-cover"
              src={imageUrl}
              alt={imageAlt}
            />
          </div>
        )}
        {svg && <div className="max-h-50 mx-auto mb-5 object-cover">{svg}</div>}
        {categories && (
          <ul className="mx-auto my-5 text-center">
            {Object.keys(categories).map((category) => (
              <li
                className={classNames({
                  'font-bold text-emerald-500': categories[category],
                })}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
