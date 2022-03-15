import { graphql, Link } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const RadschnellwegIndex = ({ data }) => {
  return (
    <Layout padding={false}>
      <HelmetSeo title="Radschnellwege" description="TODO" image="TODO" />
      <div className="bg-white">
        {/* Header */}
        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <StaticImage
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Bundesweit
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-slate-300">
              Eine Übersicht aller Radschnellverbindngen bundesweit. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dolore molestiae hic
              nesciunt ab odio magnam itaque aperiam quo est modi dignissimos.
            </p>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Alle Radschnellwege
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {data.radschnellwege.nodes.map((radschnellweg) => (
              <div
                key={radschnellweg.name}
                className="flex flex-col rounded-2xl bg-white shadow-xl"
              >
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                    {/* <!-- Heroicon name: outline/phone --> */}
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-slate-900">
                    {radschnellweg.from} &rarr; {radschnellweg.to}{' '}
                    {/* https://tailwindui.com/components/application-ui/elements/badges */}
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
                      {radschnellweg.state}
                    </span>
                  </h3>
                  <p className="mt-4 text-base text-slate-500">
                    {radschnellweg.description}
                  </p>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                  <Link
                    to={radschnellweg.fromSlug}
                    className="text-base font-medium text-indigo-700 hover:text-emerald-400"
                  >
                    Mehr erfahren<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RadschnellwegIndex;

export const query = graphql`
  {
    radschnellwege: allRadschnellweg {
      nodes {
        from
        to
        state
        fromSlug: gatsbyPath(filePath: "/radschnellwege/{Radschnellweg.from}")
      }
    }
  }
`;
