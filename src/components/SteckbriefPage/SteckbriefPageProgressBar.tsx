import clsx from 'clsx'
import { StateIcons } from './StateIcons.const'

type Props = {
  currentState: (typeof progressStates)[number]
}

const progressStates = ['idea', 'agreement_process', 'planning', 'in_progress', 'done']

export const SteckbriefPageProgressBar: React.FC<Props> = ({ currentState }) => {
  return (
    <div className="flex h-14 min-w-full flex-row place-content-stretch pb-4 md:pr-6">
      {progressStates.map((state) => {
        const selected = progressStates.indexOf(state) <= progressStates.indexOf(currentState)
        return (
          <div
            key={state}
            className={clsx(
              'relative inline-flex items-center justify-center border-y-2 font-bold hover:cursor-default',
              'first:rounded-l-full first:border-l-2 last:rounded-r-full last:border-r-2',
              'grow py-0.5',
              selected && 'border-[#7B8D84] bg-[#4A6F61]',
              selected && 'mr-0.5',
            )}
          >
            <div className={clsx('h-5 w-5', selected ? 'text-white' : 'text-gray-400')}>
              {/* @ts-expect-error */}
              {StateIcons[state].icon}
            </div>
            <div className="absolute -bottom-6 text-[0.5rem] sm:text-xs">
              {/* @ts-expect-error */}
              {StateIcons[state].title}
            </div>
          </div>
        )
      })}
    </div>
  )
}
