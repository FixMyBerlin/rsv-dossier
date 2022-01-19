import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '~/components/Layout/Layout';
import { ButtonLink } from '~/components/Links/ButtonLink';

const NotFound: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-orange-400 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-slate-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <ButtonLink to="/">Startseite</ButtonLink>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
};
export default NotFound;
