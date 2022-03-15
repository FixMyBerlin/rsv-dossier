import React from 'react';
import { Stats } from '~/types/Stats';

type Props = {
  stats: Stats[];
};

export const FundingStats: React.VFC<Props> = ({ stats }) => {
  return (
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
  );
};
