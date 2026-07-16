import { Container } from '@/components/common/container'
import { cn } from '@/lib/utils'

interface SlideGalleryProps {
  slides: string[]
  projectTitle: string
  eyebrow?: string
  className?: string
}

/**
 * The project's actual deck, shown in full. The written case study is the
 * argument; this is the evidence. Slides keep their native aspect and lazy
 * load so the gallery stays cheap until scrolled into.
 */
export function SlideGallery({
  slides,
  projectTitle,
  eyebrow = 'The full presentation',
  className,
}: SlideGalleryProps) {
  if (!slides.length) return null
  return (
    <section className={cn('border-t border-hairline py-16', className)}>
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-ink">
              The deck, in full
            </h2>
            <p className="mt-2 text-sm text-ink-mute">
              {slides.length} slides. Scroll to read the project the way it was
              presented.
            </p>
          </div>
          <div className="flex flex-col">
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${projectTitle} slide ${i + 1} of ${slides.length}`}
                loading="lazy"
                decoding="async"
                className="block w-full align-top"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
