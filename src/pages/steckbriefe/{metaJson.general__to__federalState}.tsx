import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { SteckbriefePage } from '~/components/SteckbriefePage';

type Props = Pick<
  PageProps<Queries.FederalStateToIndexQuery>,
  'location' | 'data' | 'pageContext'
>;

const FederalStateToIndex: React.FC<Props> = ({
  location,
  data: { from, to },
  pageContext,
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Recheck if types are available in Gatsby5
  const state = pageContext.general__to__federalState as string;

  // Manualy join data because graphQL has no OR operator
  type GraphQlJoin = { [key: string]: typeof from['nodes'][number] };
  const graphQlJoin: GraphQlJoin = {};
  [...from.nodes, ...to.nodes].forEach((node) => {
    graphQlJoin[node.jsonId] = node;
  });

  const radschnellwege = Object.values(graphQlJoin);

  const HeaderTitle = (
    <>
      {radschnellwege.length} geplanten Radschnellverbindungen (RSV) in {state}
    </>
  );

  const HeaderDescription = (
    <>
      Übersicht der aktuell {radschnellwege.length} geplanten
      Radschnellverbindungen in {state}. Die Liste wird fortlaufend aktualisiert
      und ergänzt. Um alle Radschnelllverbindungen im Bundesgebiet zu sehen,{' '}
      <br />
      <Link to="/steckbriefe" className="text-gray-50 hover:underline">
        Alle Radschnellverbindungen im Bundesgebiet
      </Link>
    </>
  );

  return (
    <Layout location={location}>
      <HelmetSeo
        title={`Steckbriefe für ${state}`}
        description={`Eine Übersicht der ${radschnellwege.length} Radschnellverbindungen in ${state}`}
      />
      <SteckbriefePage
        headerTitle={HeaderTitle}
        headerDescription={HeaderDescription}
        radschnellwege={radschnellwege}
        currentFilter={location.pathname}
      />
    </Layout>
  );
};

export default FederalStateToIndex;

export const query = graphql`
  query FederalStateToIndex($general__to__federalState: String!) {
    from: allMetaJson(
      filter: {
        general: { from: { federalState: { eq: $general__to__federalState } } }
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
        general: { to: { federalState: { eq: $general__to__federalState } } }
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
