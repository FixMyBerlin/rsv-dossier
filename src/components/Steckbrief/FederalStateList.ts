import { graphql, useStaticQuery } from 'gatsby';

export const query = graphql`
  query FederalStates {
    radschnellwege: allMetaJson {
      nodes {
        general {
          from {
            federalState
          }
          to {
            federalState
          }
        }
      }
    }
  }
`;

// returns a list of all federal states including the number of RSVs
export const FederalStateList = () => {
  const stateCount = {};
  const addState = (state) => {
    if (stateCount[state]) {
      stateCount[state] += 1;
    } else {
      stateCount[state] = 1;
    }
  };
  const { radschnellwege }: Queries.FederalStatesQuery = useStaticQuery(query);
  radschnellwege.nodes.forEach(({ general: { from, to } }) => {
    addState(from.federalState);
    if (stateCount[from.federalState] !== stateCount[to.federalState]) {
      addState(to.federalState);
    }
  });
  Object.keys(stateCount).forEach((state) => {
    stateCount[state] = `${state} (${stateCount[state]})`;
  });
  return stateCount;
};
