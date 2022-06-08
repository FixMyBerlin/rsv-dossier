import { PageProps, graphql, Link } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MetaJson, StaticMap } from '~/types/index';

type GraphQLMeta = {
  jsonId: string;
} & StaticMap;

type Props = {
  data: { radschnellwege: { nodes: Array<GraphQLMeta> } };
};
const SteckbriefeIndex: React.FC<PageProps & Props> = ({
  data: { radschnellwege },
}) => {
  return (
    <Layout>
      <HelmetSeo
        title="Steckbriefe"
        description="Die einzelnen Radschnellverbindungen in den verschiedenen Bundesländern in Deutschland."
      />
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
            Alle Radschnellverbindungen
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8">
            {radschnellwege.nodes.map(
              (radschnellweg: MetaJson & GraphQLMeta) => (
                <div
                  key={radschnellweg.general.name}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
                >
                  <GatsbyImage
                    image={getImage(radschnellweg.staticMap)}
                    alt="Thumbnail-Karte"
                  />
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <h3 className="text-xl font-medium text-slate-900">
                      {radschnellweg.general.from} &rarr;{' '}
                      {radschnellweg.general.to}{' '}
                      {/* https://tailwindui.com/components/application-ui/elements/badges */}
                      <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
                        {radschnellweg.state}
                      </span>
                    </h3>
                    <p className="mt-4 text-base text-slate-500">
                      {radschnellweg.general.description}
                    </p>
                  </div>
                  <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                    <Link
                      to={`./${radschnellweg.jsonId}`}
                      className="text-base font-medium text-indigo-700 hover:text-emerald-400"
                    >
                      Mehr erfahren<span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SteckbriefeIndex;

export const query = graphql`
  {
    radschnellwege: allMetaJson {
      nodes {
        state
        general {
          to
          from
          name
          slug
          description
        }
        jsonId
        staticMap {
          childImageSharp {
            gatsbyImageData(height: 250)
          }
        }
      }
    }
  }
`;
