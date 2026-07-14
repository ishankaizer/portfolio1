import { useState } from 'react'
import { cn } from '@/lib/utils'

/** Square album cover with a name-tile fallback until real art is dropped in. */
export function AlbumCover({
  title,
  year,
  src,
  className,
}: {
  title: string
  year: string
  src?: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed
  return (
    <div
      className={cn(
        'relative aspect-square overflow-hidden rounded-lg border border-hairline bg-paper-2',
        className,
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={`${title} album cover`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-3 text-center transition-transform duration-500 ease-out group-hover:scale-105">
          <span className="text-balance font-display text-sm font-bold uppercase leading-tight text-ink/55">
            {title}
          </span>
          <span className="absolute bottom-2 left-2.5 font-mono text-[0.55rem] text-ink-mute">
            {year}
          </span>
        </div>
      )}
    </div>
  )
}
