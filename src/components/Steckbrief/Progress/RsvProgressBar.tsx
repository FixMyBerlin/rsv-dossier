import React from 'react';
import classNames from 'classnames';
import { StateIcons } from '.';

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

export const RsvProgressBar: React.FC<Props> = ({ currentState }) => {
  const selectedStyle =
    'bg-yellow-500 border-yellow-500 text-white text-gray-600';
  const unselectedStyle = 'text-gray-600';
  return (
    <div className="flex flex-row pb-4 text-black">
      {progressStates.map((state) => (
        <div
          key={state}
          className={classNames(
            'relative inline-flex items-center justify-center border-y-2 font-bold hover:cursor-default',
            'first:rounded-l-full first:border-l-2 last:rounded-r-full last:border-r-2',
            'px-8 py-0.5',
            progressStates.indexOf(state) <=
              progressStates.indexOf(currentState)
              ? selectedStyle
              : unselectedStyle
          )}
        >
          <img
            src={StateIcons[state].icon}
            alt={`${StateIcons[state].title} icon`}
            className="m-2 h-5 w-5"
          />
          <div className="invisible absolute -bottom-6 text-xs sm:visible lg:visible xl:visible">
            {StateIcons[state].title}
          </div>
        </div>
      ))}
    </div>
  );
};
