import { Section } from '@/components/common/section'
import { SectionHeader } from '@/components/common/section-header'
import { Reveal } from '@/components/common/reveal'
import { philosophies, hobbies } from '@/data/about'

export function Apart() {
  return (
    <Section id="apart" band divided>
      <SectionHeader
        index="04"
        eyebrow="How I think"
        title={
          <>
            Two mediums,{' '}
            <span className="font-serif font-normal normal-case italic text-brand">
              one instinct.
            </span>
          </>
        }
      />

      <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
        {philosophies.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.08}>
            <figure className="flex h-full flex-col gap-5 border-l-2 border-brand pl-6">
              <figcaption className="font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
                {p.label}
              </figcaption>
              <blockquote className="text-balance font-serif text-2xl leading-snug text-ink sm:text-[1.6rem]">
                {p.text}
              </blockquote>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-hairline pt-8">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-mute">
            Away from the desk
          </span>
          <ul className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <li
                key={h}
                className="rounded-full border border-hairline px-3 py-1 text-sm text-ink-soft"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
