/* eslint-disable camelcase */
import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { FederalStateOverview } from '~/components/Steckbrief';

const FederalStateToIndex: React.FC<
  PageProps<Queries.FederalStateToIndexQuery>
> = ({
  location,
  data: { from, to },
  params: { general__to__federalState },
}) => {
  // manualy join data because graphQL has no OR operator
  return (
    <FederalStateOverview
      to={to}
      from={from}
      location={location}
      state={general__to__federalState}
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
