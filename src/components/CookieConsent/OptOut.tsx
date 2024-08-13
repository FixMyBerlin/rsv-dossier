import Link from '@components/links/Link'
import React, { useEffect, useState } from 'react'
import { getOptInCookie, setOptInCookie } from './storage'

export const OptOut: React.FC = () => {
  const [consent, setConsent] = useState(false)
  // @ts-expect-error todo
  useEffect(() => setConsent(getOptInCookie()))
  if (!consent) {
    if (consent == null) {
      return (
        <div className="mt-5">
          <p>Sie haben der Datenverarbeitung durch MapTiler nicht zugestimmt.</p>
        </div>
      )
    }
    return (
      <div className="mt-5">
        <p>
          Sie haben die{' '}
          <Link href="https://www.maptiler.com/privacy-policy/">
            Datenschutzbestimmungen von MapTiler
          </Link>
          und diese Datenschutzerklärung abgelehnt. Hier können Sie zustimmen.
        </p>
        <button
          // outline todo buttonstyles
          onClick={() => {
            setConsent(true)
            setOptInCookie(true)
          }}
        >
          Ja, ich stimme zu
        </button>
      </div>
    )
  }
  return (
    <div className="mt-5">
      <p>
        Sie haben der{' '}
        <Link href="https://www.maptiler.com/privacy-policy/">
          Datenschutzbestimmungen von MapTiler
        </Link>{' '}
        und dieser Datenschutzerklärung zugestimmt. Hier können Sie Ihre Einwilligung zurückziehen.
      </p>
      <button
        // outline todo buttonstyles
        onClick={() => {
          setConsent(false)
          setOptInCookie(false)
        }}
      >
        Einwilligung Zurückziehen
      </button>
    </div>
  )
}
