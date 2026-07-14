import { Container } from '@/components/common/container'
import { Assemble } from '@/components/draft/assemble'
import { site } from '@/data/site'

/** The seven materials one mind works in — the hero's bill of materials. */
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
      className="draft-grid relative overflow-hidden border-b border-hairline"
      style={{ '--grid-size': '32px' } as React.CSSProperties}
    >
      <Container>
        <div className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16">
          {/* origin marker — the grid is real, and this is 0,0 */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-1 left-0 font-mono text-[10px] tracking-wider text-ink-mute"
          >
            <span className="text-brand">+</span> 0,0
          </span>

          {/* machine header — the sheet's identity */}
          <Assemble from="down">
            <div className="flex items-center gap-3 pt-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink-mute">
              <span className="border border-ink-mute/40 px-1.5 py-0.5">General arrangement</span>
              <span aria-hidden className="h-px flex-1 bg-hairline" />
              <span className="hidden sm:inline">Sheet 00 / 05</span>
            </div>
          </Assemble>

          {/* the hand — a human statement, in his own voice */}
          <h1 className="mt-8 max-w-[19ch] font-display text-[clamp(2.3rem,7.2vw,5.8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-ink">
            I draw the <span className="text-brand">whole thing</span> — the object, the interface, and the code that runs it.
          </h1>

          {/* the bill of materials — assembled from seven disciplines */}
          <div className="mt-12">
            <div className="flex items-baseline justify-between font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink-mute">
              <span>Bill of materials</span>
              <span>07 disciplines &middot; 01 mind</span>
            </div>
            <div aria-hidden className="mt-2 h-px w-full bg-ink/25" />
            <ol className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:grid-cols-7">
              {disciplines.map((d, i) => (
                <Assemble key={d} from="up" delay={0.04 * i}>
                  <li className="flex flex-col gap-1.5">
                    <span className="font-mono text-[0.62rem] font-semibold text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-semibold leading-tight text-ink">{d}</span>
                  </li>
                </Assemble>
              ))}
            </ol>
          </div>

          {/* actions — drawn as annotations, not buttons */}
          <Assemble from="up" delay={0.1}>
            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-ink bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:border-brand hover:bg-brand"
              >
                <span aria-hidden>&#9656;</span> Open the drawings
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border-b border-ink/40 pb-0.5 font-mono text-xs uppercase tracking-[0.1em] text-ink transition-colors hover:border-brand hover:text-brand"
              >
                Résumé <span aria-hidden>&#8599;</span>
              </a>
            </div>
          </Assemble>
        </div>
      </Container>

      {/* title block — anchors the sheet, holds the real metadata */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden border-l border-t border-ink/30 bg-paper/75 backdrop-blur-sm lg:block">
        <dl className="grid grid-cols-[auto_auto]">
          {[
            ['Project', 'Ishan Kaizer'],
            ['Location', site.location],
            ['Status', '2026 — available'],
            ['Rev', '—'],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`contents`}
            >
              <dt
                className={`border-hairline px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-ink-mute ${i < 3 ? 'border-b' : ''}`}
              >
                {k}
              </dt>
              <dd
                className={`border-l border-hairline px-3 py-1.5 font-mono text-[0.62rem] font-medium ${i < 3 ? 'border-b' : ''} ${k === 'Status' ? 'text-brand' : 'text-ink'}`}
              >
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
