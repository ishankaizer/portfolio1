import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Bar-wipe route transition: covers the screen in staggered vertical bars,
// navigates underneath, then peels the bars away to reveal the new page.
// Timings mirror the site's mechanical easing (see docs/animation.md).
const BARS = 8
const COVER_STEP = 0.5
const COVER_STAGGER = 0.045
const REVEAL_STEP = 0.5
const REVEAL_STAGGER = 0.045
const COVER_HOLD_MS = (COVER_STAGGER * (BARS - 1) + COVER_STEP) * 1000 + 80
const REVEAL_HOLD_MS = (REVEAL_STAGGER * (BARS - 1) + REVEAL_STEP) * 1000 + 120

type Phase = 'idle' | 'covering' | 'revealing'

const RouteMaskContext = createContext<((to: string) => void) | null>(null)

export function useRouteMaskNavigate() {
  const ctx = useContext(RouteMaskContext)
  if (!ctx) throw new Error('useRouteMaskNavigate must be used within RouteMaskProvider')
  return ctx
}

export function RouteMaskProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const navigate = useNavigate()
  const reduce = useReducedMotion()
  const timers = useRef<number[]>([])

  const go = useCallback(
    (to: string) => {
      if (reduce) {
        navigate(to)
        return
      }
      timers.current.forEach((t) => window.clearTimeout(t))
      timers.current = []
      setPhase('covering')
      // Hard timeouts drive every phase change, independent of animation
      // callbacks, so the mask can never get stuck covering the page.
      const coverTimer = window.setTimeout(() => {
        navigate(to)
        setPhase('revealing')
        const revealTimer = window.setTimeout(() => setPhase('idle'), REVEAL_HOLD_MS)
        timers.current.push(revealTimer)
      }, COVER_HOLD_MS)
      timers.current.push(coverTimer)
    },
    [navigate, reduce],
  )

  return (
    <RouteMaskContext.Provider value={go}>
      {children}
      {phase !== 'idle' && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[290] flex">
          {Array.from({ length: BARS }).map((_, i) => (
            <span
              key={i}
              className={cn(
                'route-mask-bar h-full flex-1 bg-ink',
                phase === 'covering' ? 'route-mask-bar--cover' : 'route-mask-bar--reveal',
              )}
              style={{
                animationDelay: `${i * (phase === 'covering' ? COVER_STAGGER : REVEAL_STAGGER)}s`,
              }}
            />
          ))}
        </div>
      )}
    </RouteMaskContext.Provider>
  )
}
