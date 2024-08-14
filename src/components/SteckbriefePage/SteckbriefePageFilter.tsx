import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { navigate } from 'astro:transitions/client'
import clsx from 'clsx'

import React, { Fragment } from 'react'
import meta from 'src/radschnellwege/meta/meta.json'

type Props = {
  currentFilter: string
}

/** @desc A list of all federal states including the number of RSVs */
export const SteckbriefePageFilter: React.FC<Props> = ({ currentFilter }) => {
  const radschnellwege = meta

  const stateCount: Record<string, number> = {}
  const statePaths: Record<string, string> = {}

  const addState = (state: string) => {
    stateCount[state] ||= 0
    stateCount[state] += 1
  }

  radschnellwege.forEach(({ general: { from, to } }) => {
    addState(from.federalState)
    statePaths[from.federalState] = `/steckbriefe/${from.federalState
      .toLocaleLowerCase()
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')}`
    if (stateCount[from.federalState] !== stateCount[to.federalState]) {
      addState(to.federalState)
      statePaths[to.federalState] = `/steckbriefe/${to.federalState
        .toLocaleLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')}`
    }
  })

  const all = 'Alle anzeigen'
  statePaths[all] = '/steckbriefe/'
  stateCount[all] = radschnellwege.length

  return (
    <div className="mb-10 w-72">
      <Listbox value={currentFilter} onChange={(selected) => navigate(statePaths[selected])}>
        {({ open }) => (
          <>
            <Label className="block text-sm font-medium text-white">Filtern nach Bundesland</Label>
            <div className="relative mt-1">
              <ListboxButton className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="block truncate">{currentFilter}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {Object.keys(stateCount)
                    .sort()
                    .map((state) => (
                      <ListboxOption
                        key={state}
                        className={
                          'relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-slate-700 hover:text-white'
                        }
                        value={state}
                      >
                        {({ selected }) => (
                          <div
                            className={clsx(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate',
                            )}
                          >
                            {state} ({stateCount[state]})
                          </div>
                        )}
                      </ListboxOption>
                    ))}
                </ListboxOptions>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  )
}
