import React from 'react';
import classNames from 'classnames';
import { StateIcons } from '~/components/StateIcons';

type Props = {
  currentState: typeof progressStates[number];
};

const progressStates = [
  'idea',
  'agreement_process',
  'planning',
  'in_progress',
  'done',
];

export const SteckbriefPageProgressBar: React.FC<Props> = ({
  currentState,
}) => {
  return (
    <div className="flex h-14 min-w-full flex-row place-content-stretch pb-4 md:pr-6">
      {progressStates.map((state) => {
        const selected =
          progressStates.indexOf(state) <= progressStates.indexOf(currentState);
        return (
          <div
            key={state}
            className={classNames(
              'relative inline-flex items-center justify-center border-y-2 font-bold hover:cursor-default',
              'first:rounded-l-full first:border-l-2 last:rounded-r-full last:border-r-2',
              'grow py-0.5',
              selected && 'border-pastel-gray bg-pastel-gray',
              !selected && 'ml-0.5'
            )}
          >
            <div
              className={classNames(
                'h-5 w-5',
                selected ? 'text-white' : 'text-gray-400'
              )}
            >
              {StateIcons[state].icon}
            </div>
            <div className="absolute -bottom-6 text-[0.5rem] sm:text-xs">
              {StateIcons[state].title}
            </div>
          </div>
        );
      })}
    </div>
  );
};
