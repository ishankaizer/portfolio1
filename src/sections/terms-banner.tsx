import { Marquee } from '@/components/common/marquee'

/** The breadth, as a moving band. Decorative, so hidden from screen readers. */
const terms = [
  'Industrial Design',
  'Product Design',
  'UI / UX',
  'Visualization',
  'Branding',
  'AI Workflows',
  'Frontend',
]

export function TermsBanner() {
  return (
    <section
      aria-hidden
      className="border-y border-hairline bg-paper-2/40 py-5 sm:py-6"
    >
      <Marquee duration={38} pauseOnHover fadeAmount={8}>
        {terms.map((t) => (
          <div key={t} className="flex items-center">
            <span className="px-6 font-display text-lg font-bold uppercase tracking-tight text-ink sm:px-9 sm:text-2xl">
              {t}
            </span>
            <span className="text-brand">&#9670;</span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
