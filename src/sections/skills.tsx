import { useEffect, useRef, useState } from 'react'
import {
  cubicBezier,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { Section } from '@/components/common/section'
import { SectionHeader } from '@/components/common/section-header'
import { toolGroups } from '@/data/about'
import { cn } from '@/lib/utils'

/**
 * The toolkit as an exploded view. On entry the tool names lie strewn across
 * the sheet like parts on a drafting bench: offset, slightly rotated, over a
 * faint working grid. Scroll scrubs the assembly: each part translates
 * mechanically into its seat, in sequence, until the composition locks into
 * the resting type specimen and the grid fades away. The section performs the
 * site's thesis: separate instruments, one practice.
 *
 * Robustness: the resting layout is the natural flow layout. Scatter is pure
 * transform driven by scroll position, so with JS dead or reduced motion the
 * section is simply the assembled, readable specimen. Nothing is ever hidden
 * behind the animation, and no rAF loop runs.
 */
const scaleClass = {
  lg: 'text-[clamp(2.5rem,5.5vw,4.5rem)]',
  md: 'text-[clamp(1.9rem,4vw,3.25rem)]',
  sm: 'text-[clamp(1.5rem,3vw,2.4rem)]',
} as const

/** Deterministic bench-scatter pose per part, in render order. */
const SCATTER = [
  { x: 150, y: -130, r: -7 }, // Figma
  { x: -210, y: -120, r: 5 }, // Blender
  { x: 240, y: -60, r: -4 }, // Fusion 360
  { x: -160, y: 90, r: 6 }, // Photoshop
  { x: 90, y: 170, r: -5 }, // Illustrator
  { x: 260, y: 120, r: 3 }, // CorelDRAW
  { x: -240, y: 40, r: -6 }, // After Effects
  { x: 130, y: -110, r: 4 }, // Premiere
  { x: -90, y: 150, r: -3 }, // Python
]

const mech = cubicBezier(0.16, 0.84, 0.3, 1)

/** Each part settles over its own slice of the scrub, in sequence. */
function settleWindow(i: number): [number, number] {
  const start = 0.04 + i * 0.055
  return [start, start + 0.42]
}

function ToolLabel({ tool }: { tool: (typeof toolGroups)[number]['tools'][number] }) {
  return (
    <span className="group/tool inline-flex items-baseline gap-2.5">
      <span
        className={cn(
          'font-display font-black uppercase leading-[0.92] tracking-tight text-ink transition-colors duration-300 group-hover/tool:text-brand',
          scaleClass[tool.scale],
        )}
      >
        {tool.label}
      </span>
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ink-mute transition-colors duration-300 group-hover/tool:text-ink-soft sm:text-xs">
        {tool.note}
      </span>
    </span>
  )
}

function ScatterPart({
  progress,
  index,
  children,
}: {
  progress: MotionValue<number>
  index: number
  children: React.ReactNode
}) {
  const pose = SCATTER[index % SCATTER.length]
  const range = settleWindow(index)
  const x = useTransform(progress, range, [pose.x, 0], { ease: mech })
  const y = useTransform(progress, range, [pose.y, 0], { ease: mech })
  const rotate = useTransform(progress, range, [pose.r, 0], { ease: mech })
  return (
    <motion.span className="inline-block will-change-transform" style={{ x, y, rotate }}>
      {children}
    </motion.span>
  )
}

export function Skills() {
  const stageRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [small, setSmall] = useState(false)

  // Small screens have no room to stage the scatter: names would clip
  // mid-word at the viewport edge and read as broken. They get the
  // assembled specimen directly, same as reduced motion.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const sync = () => setSmall(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const staticView = Boolean(reduce) || small

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start 0.75', 'end 0.9'],
  })
  const gridOpacity = useTransform(scrollYProgress, [0.05, 0.85], [0.8, 0])

  let partIndex = -1

  return (
    <Section id="skills" divided className="overflow-x-clip">
      <SectionHeader
        index="05"
        eyebrow="Toolkit"
        title={
          <>
            The tools I{' '}
            <span className="font-serif font-normal normal-case italic text-brand">
              reach for.
            </span>
          </>
        }
        description="Comfortable from CAD to front-end, and I write Python to delete the repetitive parts of design production. Set in order of reach: the bigger the name, the more it gets used."
      />

      <div
        ref={stageRef}
        className={cn('relative mt-10 sm:mt-12', !staticView && 'h-[180vh]')}
      >
        <div
          className={cn(
            !staticView &&
              'sticky top-16 flex min-h-[calc(100svh-5rem)] flex-col justify-center pb-8',
          )}
        >
          {!staticView && (
            <motion.div
              aria-hidden
              className="draft-grid pointer-events-none absolute -inset-x-8 inset-y-0 -z-10"
              style={{ opacity: gridOpacity }}
            />
          )}

          <div>
            {toolGroups.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-3 border-t border-hairline py-6 sm:py-8 lg:flex-row lg:items-baseline lg:justify-between lg:gap-12"
              >
                <p className="flex min-w-0 flex-wrap items-baseline gap-x-6 gap-y-2 sm:gap-x-9">
                  {group.tools.map((tool) => {
                    partIndex += 1
                    return staticView ? (
                      <ToolLabel key={tool.label} tool={tool} />
                    ) : (
                      <ScatterPart
                        key={tool.label}
                        progress={scrollYProgress}
                        index={partIndex}
                      >
                        <ToolLabel tool={tool} />
                      </ScatterPart>
                    )
                  })}
                </p>
                <div className="order-first flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute lg:order-last">
                  <span aria-hidden className="h-px w-6 bg-hairline" />
                  <span>{group.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
