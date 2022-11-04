/* eslint-disable camelcase */
import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { FederalStateOverview } from '~/components/Steckbrief';

const FederalStateFromIndex: React.FC<
  PageProps<Queries.FederalStateFromIndexQuery>
> = ({ location, data: { from, to }, pageContext }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const state = pageContext.general__from__federalState;
  return (
    <FederalStateOverview
      to={to}
      from={from}
      location={location}
      state={state}
    />
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
