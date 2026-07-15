import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * First-load intro: shows just the name, then the whole panel swipes up to
 * reveal the page. The swipe is a CSS transition (compositor-driven, so it
 * survives rAF throttling) and a hard timeout guarantees the overlay is
 * removed no matter what, so it can never get stuck covering the page.
 * Collapses to nothing under prefers-reduced-motion.
 */
export function Preloader() {
  const reduce = useReducedMotion()
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reduce) {
      setDone(true)
      return
    }
    document.body.style.overflow = 'hidden'
    const t1 = window.setTimeout(() => setLeaving(true), 1150)
    const t2 = window.setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ''
    }, 2050)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      document.body.style.overflow = ''
    }
  }, [reduce])

  if (done) return null

  return (
    <div
      className={cn(
        'preloader fixed inset-0 z-[300] grid place-items-center bg-paper',
        leaving && 'preloader-leaving',
      )}
    >
      <div className="px-6 text-center">
        <div className="overflow-hidden pb-[0.12em]">
          <h1 className="preloader-word font-display text-[clamp(2.4rem,9vw,6rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink">
            Ishan Kaizer
          </h1>
        </div>
        <div className="mt-5 overflow-hidden">
          <p className="preloader-word preloader-word-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-ink-mute sm:text-xs">
            Industrial &middot; Product &middot; UI / UX &middot; Visualization
          </p>
        </div>
      </div>
      <span className="absolute bottom-6 right-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-mute">
        Bengaluru
      </span>
    </div>
  )
}
