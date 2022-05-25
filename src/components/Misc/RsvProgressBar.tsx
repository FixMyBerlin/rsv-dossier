import React from 'react';
import classNames from 'classnames';

type Props = {
  current: string;
};

const states = {
  idea: 'Idee',
  agreement_process: 'Prüfung',
  planning: 'Entwurf',
  in_progress: 'Umsetzung',
  done: 'Abgeschlossen',
};

const baseStyle =
  'inline-flex items-center justify-center py-1 px-2 lg:px-2 text-xs lg:text-xs sm:text-base sm:px-3 xl:py-2 xl:px-4 font-bold mr-1 xl:text-lg hover:cursor-default';
const selectedStyle = 'bg-slate-900 text-white';
const unselectedStyle = 'bg-gray-300 text-gray-600';

export const RsvProgressBar: React.FC<Props> = ({ current }) => {
  const stateList = Object.keys(states);
  const nStates = stateList.length;
  return (
    <div className="flex flex-row">
      {stateList.map((state, i) => {
        const style = classNames(
          baseStyle,
          state === current ? selectedStyle : unselectedStyle,
          i === 0 && 'rounded-l-full',
          i === nStates - 1 && 'rounded-r-full'
        );
        return (
          <div className={style}>
            <div className="md:pr-1" />
            {states[state]}
          </div>
        );
      })}
    </div>
  );
};
