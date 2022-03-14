import classNames from 'classnames';
import React from 'react';
import { Stats } from '~/types/Stats';

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
  children: JSX.Element;
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
      <div className="order-2 max-w-4xl bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 md:order-none md:rounded-r-xl lg:py-10">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-2/3 lg:max-w-none lg:pl-10">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6 text-lg text-gray-500">{children}</div>
          {stats && (
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                {stats.map((stat) => (
                  <div className="flex">
                    <div className="flex flex-col px-8 pt-8 ">
                      <span className="absolute w-5 object-cover  md:w-7 ">
                        {stat.icon}
                      </span>
                      <dt className="ml-10 text-base font-medium text-gray-500">
                        {stat.title}
                      </dt>
                      <dd className="ml-10 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        {stat.number}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
      <div className="order-1 mx-auto flex md:order-none md:block">
        {imageUrl && (
          <div className="h-50 mb-5 bg-emerald-300 sm:h-72 lg:left-0 lg:h-full lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src={imageUrl}
              alt={imageAlt}
            />
          </div>
        )}
        {svg && <div className="max-h-30 mb-5 object-cover">{svg}</div>}
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
