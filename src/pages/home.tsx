import React from 'react';
import { Hero } from '~/components/Layout/Hero/Hero';
import { ButtonLink } from '~/components/Links/ButtonLink';

export const Home = () => {
  return (
    <Hero
      highlightedTitle="Radschnellverbindungen"
      title="schneller planen und bauen"
    >
      <div className="rounded-full">
        <ButtonLink to="/karte" className="w-full px-8 py-3 shadow md:text-lg">
          Zur Karte
        </ButtonLink>
      </div>
      <div className="mt-3 rounded-full  sm:mt-0 sm:ml-3">
        <ButtonLink
          to="/projekte"
          className="btn-brand-outline w-full px-8 py-3 shadow md:text-lg"
        >
          Beteiligen
        </ButtonLink>
      </div>
    </Hero>
  );
};

export default Home;
