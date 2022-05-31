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
            'mr-1 inline-flex items-center justify-center py-[1.8vw] px-[1.8vw] text-[1.8vw] font-bold first:rounded-l-full last:rounded-r-full hover:cursor-default lg:py-[1.1vw] lg:px-[1.1vw] lg:text-[1.1vw]',
            key === current ? selectedStyle : unselectedStyle
          )}
        >
          {title}
        </div>
      ))}
    </div>
  );
};
