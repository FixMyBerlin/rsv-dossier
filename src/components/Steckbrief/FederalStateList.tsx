import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

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
  return (
    <div className="w-72">
      <Listbox
        value={null}
        onChange={(selected) => {
          window.location.href = `${selected.toLowerCase()}`;
        }}
      >
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-white">
              Fitern nach Bundesland
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="block truncate">Alle anzeigen</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {' '}
                  {Object.keys(stateCount)
                    .sort()
                    .map((state) => (
                      <Listbox.Option
                        key={state}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'bg-indigo-600 text-white'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={state}
                      >
                        <span className="block truncate font-normal">
                          {`${state} (${stateCount[state]})`}
                        </span>
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};
