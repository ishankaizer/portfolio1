import { useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Drop a photo at /public/about/portrait.jpg; until then a monogram shows.
 * `bleed` drops the frame/rounding for use as a background layer.
 */
export function Portrait({
  className,
  bleed = false,
}: {
  className?: string
  bleed?: boolean
}) {
  const [failed, setFailed] = useState(false)
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden bg-paper-2',
        !bleed && 'rounded-xl border border-hairline',
        className,
      )}
    >
      {!failed ? (
        <img
          src="/about/portrait.jpg"
          alt="Ishan Kaizer"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={cn(
            'size-full object-cover',
            bleed
              ? 'grayscale'
              : 'grayscale transition-[filter] duration-500 hover:grayscale-0',
          )}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <span
            className={cn(
              'font-display font-black text-ink/15',
              bleed ? 'text-[24vw] lg:text-[15rem]' : 'text-7xl',
            )}
          >
            IK
          </span>
          {!bleed && (
            <span className="absolute bottom-3 left-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-mute">
              portrait.jpg
            </span>
          )}
        </div>
      )}
    </div>
  )
}
