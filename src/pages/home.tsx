import { Seo } from '@/components/common/seo'
import { Container } from '@/components/common/container'

/** Composed from section components in the next milestone. */
export function HomePage() {
  return (
    <>
      <Seo />
      <section className="grid min-h-[70svh] place-items-center py-24">
        <Container className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-mute">
            Shell online
          </p>
          <h1 className="mt-4 text-balance font-display text-5xl font-black uppercase tracking-tight text-ink md:text-7xl">
            Ishan{' '}
            <span className="font-serif font-normal normal-case italic text-brand">
              Kaizer
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-ink-soft">
            Routing, layout and theming are live. Homepage sections land next.
          </p>
        </Container>
      </section>
    </>
  )
}
