import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { site } from '@/data/site'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.2, 0.7, 0.2, 1] },
  },
}

const recentlyAt = ['Material Depot', 'Prime Events', 'Gravitas ’25', 'VIT']

export function Hero() {
  const reduce = useReducedMotion()
  const motionProps = reduce
    ? {}
    : { variants: container, initial: 'hidden' as const, animate: 'show' as const }
  const childProps = reduce ? {} : { variants: item }

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-hairline"
      style={{
        background:
          'radial-gradient(80% 90% at 92% -20%, color-mix(in oklab, var(--brand) 8%, transparent), transparent 60%)',
      }}
    >
      <Container>
        <motion.div
          {...motionProps}
          className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20"
        >
          <motion.p
            {...childProps}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.16em] text-ink-mute"
          >
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              {site.availability}
            </span>
            <span aria-hidden className="text-hairline">/</span>
            <span>{site.location}</span>
          </motion.p>

          <motion.h1
            {...childProps}
            className="mt-6 max-w-[16ch] text-balance font-display text-[clamp(2.6rem,8vw,6rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink"
          >
            I design things you{' '}
            <span className="font-serif font-normal normal-case italic text-brand">
              touch
            </span>{' '}
            &amp; screens you{' '}
            <span className="font-serif font-normal normal-case italic text-brand">
              tap
            </span>
            .
          </motion.h1>

          <motion.p
            {...childProps}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            {site.intro} From 3D form to shipped software — final-year Industrial
            Design at VIT.
          </motion.p>

          <motion.div {...childProps} className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="brand" size="lg">
              <a href="#work">
                View selected work
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
                Résumé
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            {...childProps}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline pt-6"
          >
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-mute">
              Recently
            </span>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {recentlyAt.map((name) => (
                <li key={name} className="text-sm font-medium text-ink-soft">
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
