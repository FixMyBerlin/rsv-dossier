import React from 'react';
import HeroGraphic from './hero_bg.svg';
import { Navigation } from '../Navigation/Navigation';

type Props = {
  highlightedTitle: string;
  title: string;
  description: string;
  location: Location;
  children: JSX.Element;
};

export const Hero: React.FC<Props> = ({
  highlightedTitle,
  title,
  description,
  children,
  location,
}) => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="relative">
        <Navigation location={location} />
        <main
          className="min-h-[530px] bg-emerald-400 bg-contain bg-bottom bg-no-repeat px-4 md:min-h-[600px]"
          style={{ backgroundImage: `url("${HeroGraphic}")` }}
        >
          <div className="mx-auto max-w-7xl pt-16 text-center sm:pt-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block break-words text-white xl:inline">
                {highlightedTitle}
              </span>{' '}
              <span className="block xl:inline">{title}</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              {description}
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
