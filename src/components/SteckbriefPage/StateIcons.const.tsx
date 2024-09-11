import { AgreementIcon } from '@assets/general/tsx/AgreementIcon'
import { DoneIcon } from '@assets/general/tsx/DoneIcon'
import { IdeaIcon } from '@assets/general/tsx/IdeaIcon'
import { PlanningIcon } from '@assets/general/tsx/PlanningIcon'
import { ProgressIcon } from '@assets/general/tsx/ProgressIcon'

export const StateIcons = {
  idea: { title: 'Idee', icon: <IdeaIcon /> },
  agreement_process: { title: 'Prüfung', icon: <AgreementIcon /> },
  planning: { title: 'Planung', icon: <PlanningIcon /> },
  in_progress: { title: 'Umsetzung', icon: <ProgressIcon /> },
  done: { title: 'Gebaut', icon: <DoneIcon /> },
}
