import React from 'react';
import { Stats } from '~/types/Stats';

type Props = {
  title: string;
  description?: string;
  stats?: Stats[];
};

export const FundingHero: React.VFC<Props> = ({
  title,
  description = '',
  stats,
}) => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="relative">
        <div className="bg-emerald-400 px-4">
          <div className="mx-auto max-w-7xl py-10 text-center md:py-16">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              {title}
            </h1>
            {stats && (
              <div className="mx-auto flex max-w-xl flex-col items-center justify-around py-5 text-xl sm:max-w-3xl md:flex-row lg:max-w-5xl lg:text-3xl">
                {stats.map((stat) => (
                  <div className="flex items-center">
                    <span className="sr-only">{stat.title}</span>
                    <span className="m-1 w-6 object-cover sm:w-10 md:m-5 md:w-16">
                      {stat.icon}
                    </span>
                    <span className="m-auto font-bold text-white">
                      {stat.number}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {description && (
              <p className="mx-auto mt-3 max-w-md text-base text-slate-800 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
