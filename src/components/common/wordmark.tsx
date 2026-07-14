import { cn } from '@/lib/utils'

/** Quiet, confident wordmark — weight contrast carries it, no ornament. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display text-lg uppercase leading-none tracking-tight text-ink',
        className,
      )}
    >
      <span className="font-extrabold">Ishan</span>{' '}
      <span className="font-medium text-ink-mute">Kaizer</span>
    </span>
  )
}
