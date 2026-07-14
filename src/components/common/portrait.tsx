import { useState } from 'react'
import { cn } from '@/lib/utils'

/** Drop a photo at /public/about/portrait.jpg; until then a monogram shows. */
export function Portrait({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div
      className={cn(
        'relative isolate overflow-hidden rounded-xl border border-hairline bg-paper-2',
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
          className="size-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-7xl font-black text-ink/15">IK</span>
          <span className="absolute bottom-3 left-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-mute">
            portrait.jpg
          </span>
        </div>
      )}
    </div>
  )
}
