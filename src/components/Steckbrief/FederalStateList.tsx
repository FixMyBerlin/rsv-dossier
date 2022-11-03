import React from 'react';
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
  return (
    <div className="w-52">
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="Canada"
      >
        <option>Alle anzeigen</option>
        {Object.keys(stateCount)
          .sort()
          .map((state) => (
            <option
              key={state}
              onClick={() => {
                window.location.href = `${state.toLowerCase()}`;
              }}
            >
              {stateCount[state]}
            </option>
          ))}
      </select>
    </div>
  );
};
