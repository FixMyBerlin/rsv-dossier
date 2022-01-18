import { graphql, Link } from 'gatsby';
import React from 'react';
import { Layout } from '~/components/Layout';

function RadschnellwegIndex({ data }) {
  return (
    <Layout padding={false}>
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
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
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Alle Radschnellwege
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {data.radschnellwege.nodes.map((radschnellweg) => (
              <div
                key={radschnellweg.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-slate-900">
                    {radschnellweg.from} &rarr; {radschnellweg.to}{' '}
                    {/* https://tailwindui.com/components/application-ui/elements/badges */}
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      {radschnellweg.state}
                    </span>
                  </h3>
                  <p className="mt-4 text-base text-slate-500">
                    {radschnellweg.description}
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
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
}

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
