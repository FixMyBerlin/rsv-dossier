import { StateIcons } from '@components/SteckbriefPage/StateIcons.const'

type Props = {
  state: string
}

export const RsvStateLabel: React.FC<Props> = ({ state }) => {
  return (
    <span className="flex items-center justify-center gap-2.5 rounded-sm border border-[#6D28D9] px-3.5 py-1 pl-3 text-sm text-[#6D28D9]">
      {/* @ts-expect-error */}
      <span className="h-3 w-3 flex-shrink-0">{StateIcons[state].icon}</span>
      {/* @ts-expect-error */}
      <span className="pt-0.5 leading-tight">{StateIcons[state].title}</span>
    </span>
  )
}
