import type { CaseMedia } from '@/types'
import { cn } from '@/lib/utils'

export function CaseMediaFrame({
  media,
  className,
}: {
  media: CaseMedia
  className?: string
}) {
  const hasImage = media.kind === 'image' && media.src
  return (
    <figure className={cn('flex flex-col gap-3', className)}>
      <div
        className="relative isolate overflow-hidden rounded-xl border border-hairline bg-paper-2"
        style={{ aspectRatio: media.aspect ?? '16 / 9' }}
      >
        {hasImage ? (
          <img
            src={media.src}
            alt={media.alt ?? media.caption ?? ''}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-6 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
              Visual placeholder
            </span>
          </div>
        )}
      </div>
      {media.caption && (
        <figcaption className="font-mono text-xs text-ink-mute">
          {media.caption}
        </figcaption>
      )}
    </figure>
  )
}
