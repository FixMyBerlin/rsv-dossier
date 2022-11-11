import React from 'react';
import classNames from 'classnames';
import IdeaIcon from './assets/IdeaIcon.svg';
import AgreementIcon from './assets/AgreementIcon.svg';
import PlanningIcon from './assets/PlanningIcon.svg';
import ProgressIcon from './assets/ProgressIcon.svg';
import DoneIcon from './assets/DoneIcon.svg';

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

const stateTitleAndIcons = {
  idea: { title: 'Idee', icon: IdeaIcon },
  agreement_process: { title: 'Prüfung', icon: AgreementIcon },
  planning: { title: 'Planung', icon: PlanningIcon },
  in_progress: { title: 'Umsetzung', icon: ProgressIcon },
  done: { title: 'Gebaut', icon: DoneIcon },
};

export const RsvProgressBar: React.FC<Props> = ({ currentState }) => {
  const selectedStyle =
    'bg-yellow-500 border-yellow-500 text-white text-gray-600 pl-0.5';
  const unselectedStyle = 'text-gray-600 ml-0.5';
  return (
    <div className="flex flex-row text-black">
      {progressStates.map((state) => (
        <div
          key={state}
          className={classNames(
            'inline-flex items-center justify-center border-y-2 font-bold first:rounded-l-full first:border-l-2 last:rounded-r-full last:border-r-2 hover:cursor-default',
            'py-[2vw] px-[2vw]',
            'sm:py-[0.8rem] sm:px-[0.8rem]',
            'lg:py-[1.1vw] lg:px-[1.1vw]',
            'xl:py-[0.9rem] xl:px-[0.9rem]',
            progressStates.indexOf(state) <=
              progressStates.indexOf(currentState)
              ? selectedStyle
              : unselectedStyle
          )}
        >
          <img
            src={stateTitleAndIcons[state].icon}
            alt={`${stateTitleAndIcons[state].title} icon`}
          />
          <div className="absolute translate-y-10 text-xs">
            {stateTitleAndIcons[state].title}
          </div>
        </div>
      ))}
    </div>
  );
};
