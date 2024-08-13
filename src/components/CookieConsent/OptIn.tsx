import Link from '@components/links/Link'
import { setOptInCookie } from './storage'

type Props = {
  setConsent: (val: boolean | null) => void
}

export const OptIn: React.FC<Props> = ({ setConsent }) => {
  return (
    <div className="mb-6 h-fit rounded-2xl bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="mt-2 text-sm text-gray-500">
          <p>
            Zur Nutzung der Kartenfunktion stimme bitte den{' '}
            <Link href="https://www.maptiler.com/privacy-policy/">
              Datenschutzbestimmungen von MapTiler
            </Link>{' '}
            zu. MapTiler speichert nur kurzfristig notwendige Daten zu Deiner IP- Adresse. Du kannst
            Deine Zustimmung auf unserer <Link href="/datenschutz/">Datenschutz-Seite</Link>{' '}
            zurückziehen.
          </p>
          Zur Darstellung unserer Karten benutzen wir MapTiler, wodurch wir eine Weitergabe von
          Nutzerinformationen an Dritte nicht vermeiden können.
        </div>
        <div className="mt-5">
          <button
            type="submit"
            // outline todo buttonstyles
            onClick={() => {
              setConsent(true)
              setOptInCookie(true)
            }}
          >
            Ja, ich stimme zu
          </button>
          <button
            type="button"
            className="mx-4"
            // outline todo buttonstyles
            onClick={() => {
              setConsent(false)
              setOptInCookie(false)
            }}
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  )
}
