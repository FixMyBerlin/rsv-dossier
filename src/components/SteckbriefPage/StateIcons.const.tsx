import { AgreementIcon } from '@assets/tsx/AgreementIcon'
import { DoneIcon } from '@assets/tsx/DoneIcon'
import { IdeaIcon } from '@assets/tsx/IdeaIcon'
import { PlanningIcon } from '@assets/tsx/PlanningIcon'
import { ProgressIcon } from '@assets/tsx/ProgressIcon'

export const StateIcons = {
  idea: { title: 'Idee', icon: <IdeaIcon /> },
  agreement_process: { title: 'Prüfung', icon: <AgreementIcon /> },
  planning: { title: 'Planung', icon: <PlanningIcon /> },
  in_progress: { title: 'Umsetzung', icon: <ProgressIcon /> },
  done: { title: 'Gebaut', icon: <DoneIcon /> },
}
