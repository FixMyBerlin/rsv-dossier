/* eslint-disable camelcase */
import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { MailToButtonLink, TextLink } from '~/components/Links';
import { RsvGrid } from '~/components/Steckbrief';

const FederalStateIndex: React.FC<PageProps<Queries.SteckbriefeIndexQuery>> = ({
  location,
  data: { from, to },
  pageContext: { general__from__federalState },
}) => {
  // manualy join data because graphQL has no OR operator
  const join = {};
  from.nodes.forEach((x) => {
    join[x.jsonId] = x;
  });
  to.nodes.forEach((x) => {
    join[x.jsonId] = x;
  });
  const radschnellwege = {
    nodes: Object.values(join),
  };
  return (
    <Layout location={location}>
      <HelmetSeo
        title="Steckbriefe"
        description="Die einzelnen Radschnellverbindungen in den verschiedenen Bundesländern in Deutschland."
      />
      <div className="bg-white">
        {/* Header */}
        <div className="relative bg-gray-800 pb-12">
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
            <div className="mt-6 max-w-3xl text-xl text-slate-300">
              Übersicht der aktuell {radschnellwege.nodes.length} geplanten
              Radschnellverbindungen in {general__from__federalState}. Die Liste
              wird fortlaufend aktualisiert und ergänzt. Um alle
              Radschnelllverbindungen im Bundesgebiet zu sehen,{' '}
              <TextLink to="..">klicken Sie hier</TextLink>.
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

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Alle Radschnellverbindungen
          </h2>
          <RsvGrid radschnellwege={radschnellwege as any} />
        </section>
      </div>
    </Layout>
  );
};

export default FederalStateIndex;

export const query = graphql`
  query FederalStateIndex($general__from__federalState: String!) {
    from: allMetaJson(
      filter: {
        general: {
          from: { federalState: { eq: $general__from__federalState } }
        }
      }
    ) {
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
    to: allMetaJson(
      filter: {
        general: { to: { federalState: { eq: $general__from__federalState } } }
      }
    ) {
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
