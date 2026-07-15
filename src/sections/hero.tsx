import { Container } from '@/components/common/container'
import { Assemble } from '@/components/draft/assemble'
import { site } from '@/data/site'

/** His breadth, shown as real information, not a themed parts list. */
const disciplines = [
  'Industrial Design',
  'Product Design',
  'UI / UX',
  'Visualization',
  'Branding',
  'AI Workflows',
  'Frontend',
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-hairline"
    >
      <Container>
        <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
          <Assemble from="down">
            <p className="text-sm font-medium tracking-tight text-ink-mute">
              {site.availability}
            </p>
          </Assemble>

          <Assemble from="up" delay={0.06}>
            <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(2.4rem,7vw,5.6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-ink">
              I draw the <span className="text-brand">whole thing</span>: the
              object, the interface, and the code that runs it.
            </h1>
          </Assemble>

          <Assemble from="up" delay={0.12}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              {site.positioning}
            </p>
          </Assemble>

          <Assemble from="up" delay={0.18}>
            <p className="mt-10 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
              {disciplines.map((d, i) => (
                <span key={d}>
                  {i > 0 && (
                    <span aria-hidden className="mx-2.5 text-ink-mute/50">
                      /
                    </span>
                  )}
                  {d}
                </span>
              ))}
            </p>
          </Assemble>

          <Assemble from="up" delay={0.24}>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
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
          </Assemble>
        </div>
      </Container>
    </section>
  )
}
