import { cn } from '@/lib/utils'
import { Container } from './container'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Anchor id for in-page navigation. */
  id?: string
  /** Subtle recessed background to separate the section from its neighbours. */
  band?: boolean
  /** Hairline rule along the top edge. */
  divided?: boolean
  /** Opt out of the built-in Container (for full-bleed layouts). */
  bleed?: boolean
}

export function Section({
  id,
  band = false,
  divided = false,
  bleed = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-20 sm:py-28 lg:py-32',
        band && 'bg-paper-2',
        divided && 'border-t border-hairline',
        className,
      )}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  )
}
