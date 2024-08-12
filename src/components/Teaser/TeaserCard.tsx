import clsx from 'clsx'

type Props = {
  href: string
  title: string
  description?: string
  tag?: string
  image:
    | string
    | {
        src: string
        width: number
        height: number
        format: 'png' | 'jpg' | 'jpeg' | 'tiff' | 'webp' | 'gif' | 'svg' | 'avif'
      }
  imageCopyright?: string
  linkText?: string
}

export const TeaserCard: React.FC<Props> = ({
  href,
  title,
  description,
  tag,
  image,
  imageCopyright,
  linkText,
}) => {
  return (
    <a href={href} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="flex h-72 overflow-hidden">
        <figure className="h-full w-full">
          {typeof image === 'string' ? (
            <img
              loading="lazy"
              className="h-full w-full overflow-hidden object-cover"
              src={image}
              alt=""
            />
          ) : (
            <img
              loading="lazy"
              className="h-full w-full overflow-hidden object-cover"
              src={image.src}
              alt=""
            />
          )}
          {imageCopyright && (
            <figcaption className="mr-6 mt-1 text-right text-xs text-gray-400 md:text-sm">
              © {imageCopyright}
            </figcaption>
          )}{' '}
        </figure>
      </div>
      <div className="relative flex-1 px-6 pb-8 pt-6 md:px-8">
        {tag && <div className="h-6 w-6 text-gray-400">{tag}</div>}
        <h3 className="text-xl font-medium text-slate-900 group-hover:underline">{title}</h3>
        <p className="mt-4 line-clamp-3 text-base text-slate-500 md:line-clamp-5">{description}</p>
      </div>
      <div className="flex flex-row place-content-between p-6 md:px-8">
        {/* todo styles textlinkclasses */}
        <div className={clsx('group-hover:underline')}>{linkText || 'Mehr erfahren'}</div>
      </div>
    </a>
  )
}
