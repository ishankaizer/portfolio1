import { cn } from '@/lib/utils'

/** "Ishan" in the grotesque, "Kaizer" as the serif-italic signature note. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display text-lg font-extrabold uppercase leading-none tracking-tight text-ink',
        className,
      )}
    >
      Ishan{' '}
      <span className="font-serif text-[1.15em] font-normal normal-case italic text-brand">
        Kaizer
      </span>
    </span>
  )
}
