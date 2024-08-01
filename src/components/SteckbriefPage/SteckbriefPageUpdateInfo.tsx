import { MailLink } from '@components/links/MailLink'
import { Heading3 } from '@components/Text'
import { XMarkIcon } from '@heroicons/react/20/solid'

type props = {
  setOverlay: (b: boolean) => void
  name: string
}

export const SteckbriefUpdateInfo: React.FC<props> = ({ setOverlay, name }) => {
  return (
    <div className="fixed bottom-20 left-auto right-6 top-auto z-50 h-36 w-96 rounded-lg bg-white px-6">
      <div className="flex">
        <Heading3>Gibt es neue Informationen?</Heading3>
        <div className="grow">
          <button className="float-right mt-6" type="button" onClick={() => setOverlay(false)}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm font-normal text-gray-500">
        Wir versuchen stets alle Informationen aktuell zu halten. Falls neue Informationen vorliegen{' '}
        <MailLink
          className="text-gray-700"
          mailto="hello@fixmycity.de"
          subject={`Anliegen zum ${name}`}
        >
          schreiben Sie uns
        </MailLink>
        einfach.
      </p>
    </div>
  )
}
