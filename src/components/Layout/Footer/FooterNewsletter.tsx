/* eslint-disable jsx-a11y/label-has-associated-control */
// ^--- Even after reading https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/718 I don't get why this is an error.
// The default should already be, that one (id or nesting) is enough.
// Disabling for now…
// Docs: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
// Airbnb Defaults: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-a11y.js
import React from 'react';

export const FooterNewsletter = () => {
  return (
    <div className="mt-8 xl:mt-0">
      <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
        Newsletter abonnieren
      </h3>
      <p className="mt-4 text-base text-slate-300">
        Neuigkeiten zu unserem Projekt
      </p>
      <form className="mt-4 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full bg-orange-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500"
          >
            Anmelden
          </button>
        </div>
      </form>
    </div>
  );
};
