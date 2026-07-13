import { Link } from 'react-router-dom'
import { Seo } from '@/components/common/seo'
import { Container } from '@/components/common/container'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Not found" path="/404" />
      <section className="grid min-h-[70svh] place-items-center py-24">
        <Container className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand">404</p>
          <h1 className="mt-4 font-display text-4xl font-black uppercase tracking-tight text-ink md:text-6xl">
            Nothing here
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-ink-soft">
            That page moved or never existed. Let&rsquo;s get you back to the work.
          </p>
          <Button asChild variant="brand" className="mt-8">
            <Link to="/">Back home</Link>
          </Button>
        </Container>
      </section>
    </>
  )
}
