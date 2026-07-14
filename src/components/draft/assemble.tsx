import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type From = 'up' | 'down' | 'left' | 'right'

const travel: Record<From, { x?: number; y?: number }> = {
  up: { y: 22 },
  down: { y: -22 },
  left: { x: -26 },
  right: { x: 26 },
}

interface AssembleProps {
  children: React.ReactNode
  className?: string
  /** Direction the part translates in from. */
  from?: From
  /** Stagger delay in seconds. */
  delay?: number
}

/**
 * The motion signature: a part translating precisely into position with
 * mechanical (torqued, not sprung) easing. Replaces the generic fade-up.
 * Collapses to the assembled state under prefers-reduced-motion.
 */
export function Assemble({ children, className, from = 'up', delay = 0 }: AssembleProps) {
  const reduce = useReducedMotion()
  const t = travel[from]
  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, x: t.x ?? 0, y: t.y ?? 0 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 0.84, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
