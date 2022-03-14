import React from 'react';

type Props = {
  title: string;
  description?: string;
};

export const FundingHero: React.VFC<Props> = ({ title, description = '' }) => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="relative">
        <div className="bg-emerald-400 px-4">
          <div className="mx-auto max-w-7xl py-5 text-center md:py-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              {title}
            </h1>
            {description && (
              <p className="mx-auto mt-3 max-w-md text-base text-white sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
