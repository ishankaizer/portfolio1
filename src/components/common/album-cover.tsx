import { useState } from 'react'
import { cn } from '@/lib/utils'

/** Square album cover with a name-tile fallback if the image fails. */
export function AlbumCover({
  title,
  src,
  className,
}: {
  title: string
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
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-3 text-center">
          <span className="text-balance font-display text-sm font-bold uppercase leading-tight text-ink/55">
            {title}
          </span>
        </div>
      )}
    </div>
  )
}
