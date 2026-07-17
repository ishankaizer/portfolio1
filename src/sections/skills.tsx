import { Section } from '@/components/common/section'
import { SectionHeader } from '@/components/common/section-header'
import { Assemble } from '@/components/draft/assemble'
import { toolGroups } from '@/data/about'
import { cn } from '@/lib/utils'

/**
 * The toolkit as a type specimen, not a card grid. Each capability is one
 * flowing baseline of tool names set at a size that encodes how central the
 * tool is to the practice (the scale lives in the data, because it is a
 * measurement, not styling). A mono margin note names the capability, the way
 * a dimension callout names a part. Tool names stay below the work index's
 * 6rem cap: instruments never outrank the work they produce.
 */
const scaleClass = {
  lg: 'text-[clamp(2.5rem,5.5vw,4.5rem)]',
  md: 'text-[clamp(1.9rem,4vw,3.25rem)]',
  sm: 'text-[clamp(1.5rem,3vw,2.4rem)]',
} as const

export function Skills() {
  return (
    <Section id="skills" divided>
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

      <div className="mt-12 sm:mt-16">
        {toolGroups.map((group, i) => (
          <Assemble
            key={group.label}
            from={i % 2 === 0 ? 'left' : 'right'}
            delay={0.04}
          >
            <div className="flex flex-col gap-3 border-t border-hairline py-7 sm:py-9 lg:flex-row lg:items-baseline lg:justify-between lg:gap-12">
              <p className="flex min-w-0 flex-wrap items-baseline gap-x-6 gap-y-2 sm:gap-x-9">
                {group.tools.map((tool) => (
                  <span
                    key={tool.label}
                    className="group/tool inline-flex items-baseline gap-2.5"
                  >
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
                ))}
              </p>
              <div className="order-first flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute lg:order-last">
                <span aria-hidden className="h-px w-6 bg-hairline" />
                <span>{group.label}</span>
              </div>
            </div>
          </Assemble>
        ))}
      </div>
    </Section>
  )
}
