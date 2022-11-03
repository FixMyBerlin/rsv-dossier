/* eslint-disable camelcase */
import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { FederalStateOverview } from '~/components/Steckbrief';

const FederalStateFromIndex: React.FC<
  PageProps<Queries.FederalStateFromIndexQuery>
> = ({
  location,
  data: { from, to },
  params: { general__from__federalState },
}) => {
  // manualy join data because graphQL has no OR operator
  return (
    <FederalStateOverview
      to={to}
      from={from}
      location={location}
      state={general__from__federalState}
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