import { Section } from '@/components/common/section'
import { SectionHeader } from '@/components/common/section-header'
import { Reveal } from '@/components/common/reveal'
import { tools } from '@/data/about'

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
        description="Comfortable from CAD to front-end — and I write Python to delete the repetitive parts of design production."
      />

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
        {tools.map((t, i) => (
          <Reveal key={t.label} delay={(i % 3) * 0.05}>
            <div className="group flex h-full items-center gap-4 rounded-lg border border-hairline bg-card p-4 transition-colors hover:border-ink/25">
              <span className="grid size-12 shrink-0 place-items-center rounded-md bg-paper-2 font-display text-lg font-black tracking-tight text-ink transition-colors group-hover:text-brand">
                {t.abbr}
              </span>
              <span className="flex flex-col">
                <span className="font-semibold text-ink">{t.label}</span>
                <span className="text-sm text-ink-mute">{t.note}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
