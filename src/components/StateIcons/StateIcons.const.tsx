import React from 'react';
import IdeaIcon from './assets/IdeaIcon.svg';
import AgreementIcon from './assets/AgreementIcon.svg';
import PlanningIcon from './assets/PlanningIcon.svg';
import ProgressIcon from './assets/ProgressIcon.svg';
import DoneIcon from './assets/DoneIcon.svg';

export const StateIcons = {
  idea: { title: 'Idee', icon: <IdeaIcon /> },
  agreement_process: { title: 'Prüfung', icon: <AgreementIcon /> },
  planning: { title: 'Planung', icon: <PlanningIcon /> },
  in_progress: { title: 'Umsetzung', icon: <ProgressIcon /> },
  done: { title: 'Gebaut', icon: <DoneIcon /> },
};
