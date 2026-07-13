import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  /** Section index, e.g. "01". Encodes real order, not decoration. */
  index?: string
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  className,
  as: Heading = 'h2',
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {(index || eyebrow) && (
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
          {index && <span className="font-semibold text-brand">{index}</span>}
          {index && eyebrow && <span aria-hidden className="h-px w-6 bg-hairline" />}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <Heading className="text-balance font-display text-3xl font-black uppercase leading-[1.04] tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </Heading>
      {description && (
        <p className="prose-measure text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  )
}
