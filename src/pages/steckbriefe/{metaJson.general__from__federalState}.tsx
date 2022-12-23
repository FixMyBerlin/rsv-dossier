/* eslint-disable camelcase */
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { HelmetSeo } from '~/components/Helmet/HelmetSeo';
import { Layout } from '~/components/Layout';
import { SteckbriefePage } from '~/components/SteckbriefePage';

type Props = Pick<
  PageProps<Queries.FederalStateToIndexQuery>,
  'location' | 'data' | 'pageContext'
>;

const FederalStateFromIndex: React.FC<Props> = ({
  location,
  data: { from, to },
  pageContext,
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Recheck if types are available in Gatsby5
  const state = pageContext.general__from__federalState as string;

  // Manualy join data because graphQL has no OR operator
  type GraphQlJoin = { [key: string]: typeof from['nodes'][number] };
  const graphQlJoin: GraphQlJoin = {};
  [...from.nodes, ...to.nodes].forEach((node) => {
    graphQlJoin[node.jsonId] = node;
  });

  const radschnellwege = Object.values(graphQlJoin);

  return (
    <Layout location={location}>
      <HelmetSeo
        title={`Steckbriefe für ${state}`}
        description={`Eine Übersicht der ${radschnellwege.length} Radschnellverbindungen in ${state}`}
      />
      <SteckbriefePage radschnellwege={radschnellwege} currentFilter={state} />
    </Layout>
  );
};

export default FederalStateFromIndex;

export const query = graphql`
  query FederalStateFromIndex($general__from__federalState: String!) {
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
        state
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
        state
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
