import React from 'react';
import classNames from 'classnames';

type Props = {
  current: keyof typeof states;
};

const states = {
  idea: 'Idee',
  agreement_process: 'Prüfung',
  planning: 'Planung',
  in_progress: 'Umsetzung',
  done: 'Gebaut',
};

export const SteckbriefPageProgressBar: React.FC<Props> = ({ current }) => {
  const selectedStyle = 'bg-slate-900 text-white';
  const unselectedStyle = 'bg-gray-300 text-gray-600';
  return (
    <div className="flex flex-row">
      {Object.entries(states).map(([key, title]) => (
        <div
          key={key}
          className={classNames(
            'mr-1 inline-flex items-center justify-center font-bold first:rounded-l-full last:rounded-r-full hover:cursor-default',
            'py-[2vw] px-[2vw] text-[2vw]',
            'sm:py-[0.8rem] sm:px-[0.8rem] sm:text-[0.8rem]',
            'lg:py-[1.1vw] lg:px-[1.1vw] lg:text-[1.1vw]',
            'xl:py-[0.9rem] xl:px-[0.9rem] xl:text-[0.9rem]',
            key === current ? selectedStyle : unselectedStyle
          )}
        >
          {title}
        </div>
      ))}
    </div>
  );
};
