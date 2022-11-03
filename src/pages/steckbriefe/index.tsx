import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { MailToButtonLink } from '~/components/Links';
import { RsvTeaserGrid, FederalStateList } from '~/components/Steckbrief';

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
            <div className="relative">
              <div className="absolute bottom-0 right-0 z-20">
                <FederalStateList />
              </div>
              <div className="mt-6 max-w-3xl text-xl text-slate-300">
                Übersicht der aktuell geplanten Radschnellverbindungen sowie
                deren Trassenverläufe bzw. -korridore. Enthalten sind RSV aus
                Hessen, Baden-Württemberg, Berlin, Niedersachsen,
                Schleswig-Holstein, Mecklenburg-Vorpommern, Nordrhein-Westfalen,
                Rheinland-Pfalz und Hamburg. Aktuell umfasst die Liste{' '}
                {radschnellwege.nodes.length} Radschnellverbindungen und wird
                fortlaufend erweitert.
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
              </div>
            </div>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Alle Radschnellverbindungen
          </h2>
          <RsvTeaserGrid radschnellwege={radschnellwege} />
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
        general {
          ref
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
