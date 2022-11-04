/* eslint-disable camelcase */
import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { FederalStateOverview } from '~/components/Steckbrief';

const FederalStateToIndex: React.FC<
  PageProps<Queries.FederalStateToIndexQuery>
> = ({ location, data: { from, to }, pageContext }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const state = pageContext.general__to__federalState;
  return (
    <FederalStateOverview
      to={to}
      from={from}
      location={location}
      state={state}
    />
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
