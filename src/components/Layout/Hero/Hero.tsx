import React from 'react';
import HeroGraphic from './hero-bg.svg';
import HeroGraphicMobile from './hero-bg-mobile.svg';
import { Navigation } from '../Navigation/Navigation';

type Props = {
  highlightedTitle: string;
  title: string;
  description: string;
  location: Location;
  children?: JSX.Element;
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
        <Navigation fixed={false} location={location} />
        <main className="bg-emerald-400 px-4">
          <div className="mx-auto max-w-7xl pt-16 text-center sm:pt-24">
            <h1 className="relative z-10 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <div className="block break-words text-white xl:inline">
                {highlightedTitle}
              </div>{' '}
              <span className="block xl:inline">{title}</span>
            </h1>
            <p className="relative z-10 mx-auto mt-3 max-w-md text-base text-gray-500 sm:max-w-md sm:text-lg md:mt-5 md:max-w-lg md:text-xl lg:max-w-2xl">
              {description}
            </p>

            {children && (
              <div className="relative z-10 mx-auto max-w-md py-5 sm:flex sm:justify-center md:mt-8">
                {children}
              </div>
            )}
            <div className="relative z-0 -mt-[15%] min-w-full sm:-mt-[20%]">
              <HeroGraphic alt="Hero Grafik" className="hidden sm:block" />
              <HeroGraphicMobile alt="Hero Grafik" className="sm:hidden" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
