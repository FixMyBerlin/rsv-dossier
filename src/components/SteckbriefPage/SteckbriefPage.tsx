import Link from '@components/links/Link'
import { RSVMap } from '@components/Map/RsvMap'
import { H1, H4 } from '@components/Text'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import type { MetaSchema } from 'data/schema/meta.schema'
import type { GeometrySchema } from 'src/content/config'
import { SteckbriefPageProgressBar } from './SteckbriefPageProgressBar'

type Props = {
  setOverlay: (b: boolean) => void
  meta: MetaSchema
  geometry: GeometrySchema
}

export const SteckbriefPage: React.FC<Props> = ({ meta, geometry, setOverlay }) => {
  return (
    <div className="relative min-h-[860px] bg-white">
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:py-12">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:ml-[48vw] lg:max-w-4xl lg:px-0 lg:py-0 lg:pl-14">
          <H1 className="sm:mt-0">
            {/* @ts-expect-error undefined would also return NaN so nothing breaks */}
            {Number.isNaN(parseFloat(meta.general.ref)) && `${meta.general.ref}: `}
            {meta.general.name}
          </H1>
          <div className="mt-8">
            <SteckbriefPageProgressBar currentState={meta.state} />
          </div>
          <div className="mt-8">
            <H4 className="mb-4">Kurzfassung</H4>
            {meta.general.description && (
              <p>
                {meta.general.description}
                <br />
                (Quelle:&nbsp;
                {meta.general.source && (
                  <a
                    href={meta.general.source}
                    className="text-slate-600 hover:text-slate-700 hover:underline active:underline"
                  >
                    {new URL(meta.general.source).host}
                  </a>
                )}
                )
              </p>
            )}
          </div>
          {meta.references?.website && (
            <div className="mt-6">
              <Link blank href={meta.references.website}>
                Zur Projektwebsite
              </Link>
            </div>
          )}
          <div className="mt-8 flex flex-col gap-3">
            <H4 className="mb-4">Projektdetails</H4>
            <div className="space-y-2">
              <p className="font-bold">Trassenführung</p>
              <p>{`${meta.general.from.city} - ${meta.general.to.city}`}</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Länge</p>
              <p>ca. {meta.general.length.toLocaleString('de-DE')}&thinsp;km</p>
            </div>
            <div className="flex min-w-max">
              <div className="space-y-2">
                <p className="font-bold">Zuständigkeit</p>
                {Boolean(meta.stakeholders?.length) &&
                  meta.stakeholders?.map((stakeholder) => (
                    <p key={stakeholder.name}>{stakeholder.name}</p>
                  ))}
              </div>
              <div className="flex-grow">
                <button type="button" className="float-right mt-5" onClick={() => setOverlay(true)}>
                  <InformationCircleIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-bold">Stand</p>
              <p>
                {new Date(meta.general.stand).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                })}
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a href="/datenschutz/">Datenschutz</a>
            {' - '}
            <a href="/impressum/">Impressum</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex aspect-square max-h-[860px] translate-x-1 overflow-hidden overscroll-none md:max-w-[860px] lg:fixed lg:bottom-0 lg:left-0 lg:z-10 lg:mx-0 lg:h-full lg:max-h-full lg:w-[48vw] lg:max-w-[48vw] lg:items-stretch">
        <RSVMap meta={meta} geometry={geometry} />
      </div>
    </div>
  )
}
