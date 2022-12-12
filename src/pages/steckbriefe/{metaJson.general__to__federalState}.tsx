import { graphql, PageProps } from 'gatsby';
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

  // We have to join the data manualy because graphQL has no OR operator
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
