import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';

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
        fromPath: gatsbyPath(
          filePath: "/steckbriefe/{metaJson.general__from__federalState}"
        )
        toPath: gatsbyPath(
          filePath: "/steckbriefe/{metaJson.general__to__federalState}"
        )
      }
    }
  }
`;
type Props = {
  currentFilter: string;
};

/** @desc A list of all federal states including the number of RSVs */
export const SteckbriefePageFilter: React.FC<Props> = ({ currentFilter }) => {
  const { radschnellwege }: Queries.FederalStatesQuery = useStaticQuery(query);

  const stateCount = {};
  const statePaths = {};

  const addState = (state: string) => {
    stateCount[state] ||= 0;
    stateCount[state] += 1;
  };

  radschnellwege.nodes.forEach(
    ({ general: { from, to }, fromPath, toPath }) => {
      addState(from.federalState);
      statePaths[from.federalState] = fromPath;
      if (stateCount[from.federalState] !== stateCount[to.federalState]) {
        addState(to.federalState);
        statePaths[to.federalState] = toPath;
      }
    }
  );

  const all = 'Alle anzeigen';
  statePaths[all] = '/steckbriefe/';
  stateCount[all] = radschnellwege.nodes.length;

  return (
    <div className="w-72">
      <Listbox
        value={currentFilter}
        onChange={(selected) => navigate(statePaths[selected])}
      >
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-white">
              Filtern nach Bundesland
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="block truncate">{currentFilter}</span>
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
                  {Object.keys(stateCount)
                    .sort()
                    .map((state) => (
                      <Listbox.Option
                        key={state}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'bg-slate-700 text-white'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={state}
                      >
                        {({ selected }) => (
                          <div
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate'
                            )}
                          >
                            {state} ({stateCount[state]})
                          </div>
                        )}
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
