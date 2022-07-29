import { PageProps, graphql, Link } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MailToButtonLink, TextLink } from '~/components/Links';

const SteckbriefeIndex: React.FC<PageProps<Queries.SteckbriefeIndexQuery>> = ({
  location,
  data: { radschnellwege },
}) => {
  return (
    <Layout location={location}>
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019Radschnellweg.jpg/799px-2019Radschnellweg.jpg?20190612173516"
              alt="header image"
            />
            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Übersicht über RSV-Planungen
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-slate-300">
              Übersicht der aktuell geplanten Radschnellverbindungen sowie deren
              Trassenverläufe bzw. -korridore. Enthalten sind RSV aus Hessen,
              Baden-Württemberg, Berlin, Niedersachsen, Schleswig-Holstein,
              Mecklenburg-Vorpommern, Nordrhein-Westfalen, Rheinland-Pfalz und
              Hamburg. Aktuell umfasst die Liste {radschnellwege.nodes.length}{' '}
              Radschnellverbindungen und wird fortlaufend erweitert.{' '}
              <p>
                Mail an{' '}
                <MailToButtonLink
                  mailto="hello@fixmycity.de"
                  subject="Anliegen zum RSV-Baukasten"
                  className="btn-brand-outline mt-5"
                >
                  hello@fixmycity.de
                </MailToButtonLink>{' '}
                schreiben
              </p>
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
          <div className="grid grid-cols-1 gap-y-20  md:grid-cols-2 md:gap-y-8 md:gap-x-8 lg:grid-cols-3">
            {radschnellwege.nodes.map((radschnellweg) => (
              <div
                key={radschnellweg.general.name}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
              >
                <div className="flex max-h-fit overflow-hidden">
                  <Link to={`./${radschnellweg.jsonId}`}>
                    <GatsbyImage
                      image={getImage(
                        radschnellweg.staticMap.childImageSharp.gatsbyImageData
                      )}
                      alt={radschnellweg.general.name}
                    />
                  </Link>
                </div>
                <div className="relative flex-1 px-6 pt-12 pb-8 md:px-8">
                  <h3 className="text-xl font-medium text-slate-900">
                    {Number.isNaN(parseFloat(radschnellweg.general.ref)) &&
                      `${radschnellweg.general.ref}: `}
                    {radschnellweg.general.name}
                  </h3>
                  <p className="mt-4 text-base text-slate-500 line-clamp-3 md:line-clamp-5">
                    {radschnellweg.general.description}
                  </p>
                </div>
                <div className="p-6 md:px-8">
                  <TextLink to={`./${radschnellweg.jsonId}`}>
                    Mehr erfahren
                  </TextLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SteckbriefeIndex;

export const query = graphql`
  query SteckbriefeIndex {
    radschnellwege: allMetaJson {
      nodes {
        state
        general {
          ref
          to
          from
          name
          description
        }
        jsonId
        staticMap {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
