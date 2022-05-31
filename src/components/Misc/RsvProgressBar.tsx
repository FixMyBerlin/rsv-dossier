import React from 'react';
import classNames from 'classnames';

type Props = {
  current: keyof typeof states;
};

const states = {
  idea: 'Idee',
  agreement_process: 'Prüfung',
  planning: 'Entwurf',
  in_progress: 'Umsetzung',
  done: 'Abgeschlossen',
};

export const RsvProgressBar: React.FC<Props> = ({ current }) => {
  const selectedStyle = 'bg-slate-900 text-white';
  const unselectedStyle = 'bg-gray-300 text-gray-600';
  return (
    <div className="flex flex-row">
      {Object.entries(states).map(([key, title]) => (
        <div
          key={key}
          className={classNames(
            'mr-1 inline-flex items-center justify-center py-3 px-3.5 text-xs font-bold first:rounded-l-full last:rounded-r-full hover:cursor-default sm:text-base lg:px-2.5 lg:text-xs xl:py-2.5 xl:px-4 xl:text-lg',
            key === current ? selectedStyle : unselectedStyle
          )}
        >
          {title}
        </div>
      ))}
    </div>
  );
};
