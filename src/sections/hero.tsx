import { Container } from '@/components/common/container'
import { Assemble } from '@/components/draft/assemble'
import { site } from '@/data/site'

/** The things he does, kept short and visual. */
const disciplines = [
  'Industrial Design',
  'Product Design',
  'UI / UX',
  'Visualization',
  'Branding',
  'Frontend',
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-hairline"
    >
      <Container>
        <div className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: identity, nothing more. */}
          <div>
            <Assemble from="down">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
                {site.location}
              </p>
            </Assemble>

            <Assemble from="up" delay={0.06}>
              <h1 className="mt-6 font-display text-[clamp(3rem,11vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.03em] text-ink">
                Ishan
                <br />
                <span className="text-ink-mute">Kaizer</span>
              </h1>
            </Assemble>

            <Assemble from="up" delay={0.12}>
              <p className="mt-8 flex max-w-xl flex-wrap gap-y-1 text-base text-ink-soft sm:text-lg">
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
            </Assemble>

            <Assemble from="up" delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
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

          {/* Right: cute placeholder, an industrial-design nod. Desktop only. */}
          <Assemble from="right" delay={0.14} className="hidden lg:block">
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
          </Assemble>
        </div>
      </Container>
    </section>
  )
}
