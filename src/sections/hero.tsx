import { useLayoutEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Container } from '@/components/common/container'
import { site } from '@/data/site'
import { cn } from '@/lib/utils'

/** The things he does, kept short and visual. */
const disciplines = [
  'Industrial Design',
  'Product Design',
  'UI / UX',
  'Visualization',
  'Branding',
  'Frontend',
]

const HOLD = 950
const MOVE = 1150

export function Hero() {
  const reduce = useReducedMotion()
  const nameRef = useRef<HTMLHeadingElement>(null)
  // `intro` mounts the overlay; `ready` reveals the rest of the hero.
  const [intro, setIntro] = useState(false)
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    let play = true
    try {
      play = sessionStorage.getItem('introPlayed') !== 'true'
    } catch {
      play = true
    }
    const el = nameRef.current

    // No intro: reveal the hero content shortly after mount.
    if (!play || reduce || !el) {
      try {
        sessionStorage.setItem('introPlayed', 'true')
      } catch {
        /* ignore */
      }
      const t = window.setTimeout(() => setReady(true), 60)
      return () => window.clearTimeout(t)
    }

    // Intro: place the name at screen-centre, then glide it to its resting
    // spot while the overlay dissolves. Driven by CSS transition + timeouts so
    // it survives rAF throttling and always resolves.
    setIntro(true)
    document.body.style.overflow = 'hidden'
    // Measure the true resting position (clear any stale transform first).
    el.style.transition = 'none'
    el.style.transform = 'none'
    const r = el.getBoundingClientRect()
    const dx = window.innerWidth / 2 - (r.left + r.width / 2)
    const dy = window.innerHeight / 2 - (r.top + r.height / 2)
    el.style.transformOrigin = 'center'
    el.style.transform = `translate(${dx}px, ${dy}px)`
    el.style.willChange = 'transform'
    el.style.position = 'relative'
    el.style.zIndex = '210'

    const t1 = window.setTimeout(() => {
      el.style.transition = `transform ${MOVE}ms cubic-bezier(0.16, 0.84, 0.3, 1)`
      el.style.transform = 'none'
      setReady(true)
    }, HOLD)
    const t2 = window.setTimeout(() => {
      el.style.transition = ''
      el.style.transform = ''
      el.style.transformOrigin = ''
      el.style.willChange = ''
      el.style.position = ''
      el.style.zIndex = ''
      document.body.style.overflow = ''
      try {
        sessionStorage.setItem('introPlayed', 'true')
      } catch {
        /* ignore */
      }
      setIntro(false)
    }, HOLD + MOVE + 120)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      document.body.style.overflow = ''
    }
  }, [reduce])

  return (
    <section
      id="hero"
      data-hero-ready={ready ? 'true' : 'false'}
      className={cn(
        'relative overflow-hidden border-b border-hairline',
        intro && 'hero-intro',
      )}
    >
      {intro && (
        <div
          aria-hidden
          className={cn(
            'fixed inset-0 z-[200] bg-paper transition-opacity duration-700 ease-out',
            ready ? 'opacity-0' : 'opacity-100',
          )}
        />
      )}

      <Container>
        <div className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: identity, nothing more. */}
          <div>
            <p
              className="hero-stagger font-mono text-xs uppercase tracking-[0.2em] text-ink-mute"
              style={{ transitionDelay: '0.05s' }}
            >
              {site.location}
            </p>

            <h1
              ref={nameRef}
              className="mt-6 font-display text-[clamp(3rem,11vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.03em] text-ink"
            >
              Ishan
              <br />
              <span className="text-ink-mute">Kaizer</span>
            </h1>

            <p
              className="hero-stagger mt-8 flex max-w-xl flex-wrap gap-y-1 text-base text-ink-soft sm:text-lg"
              style={{ transitionDelay: '0.2s' }}
            >
              {disciplines.map((d, i) => (
                <span key={d} className="inline-flex items-center">
                  {i > 0 && (
                    <span aria-hidden className="mx-2 text-brand">
                      &middot;
                    </span>
                  )}
                  {d}
                </span>
              ))}
            </p>

            <div
              className="hero-stagger mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{ transitionDelay: '0.28s' }}
            >
              <a
                href="#work"
                className="inline-flex items-center bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-brand"
              >
                View the work
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-brand hover:underline"
              >
                Résumé &#8599;
              </a>
            </div>
          </div>

          {/* Right: cute placeholder, an industrial-design nod. Desktop only. */}
          <div
            className="hero-stagger hidden lg:block"
            style={{ transitionDelay: '0.34s' }}
          >
            <div className="draft-grid relative aspect-square w-full overflow-hidden rounded-lg border border-hairline">
              <span className="absolute left-4 top-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-mute">
                Fig. 01 / placeholder
              </span>
              <div className="grid h-full place-items-center">
                <svg
                  viewBox="0 0 200 215"
                  className="hero-float w-1/2 max-w-[220px]"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M100 40 L160 75 L100 110 L40 75 Z"
                    stroke="var(--ink-soft)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M40 75 L40 140 L100 175 L100 110 Z"
                    stroke="var(--ink-soft)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M160 75 L160 140 L100 175 L100 110 Z"
                    stroke="var(--ink-soft)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="100" cy="40" r="4.5" fill="var(--brand)" />
                </svg>
              </div>
              <span className="absolute bottom-4 right-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-brand">
                object &middot; interface &middot; code
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
