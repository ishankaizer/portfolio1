import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme/theme-context'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      className={cn(
        'inline-grid size-9 place-items-center rounded-md border border-hairline text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink',
        className,
      )}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  )
}
