import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Seconds of stagger before this element animates in. */
  delay?: number
  /** Vertical travel distance in px. */
  y?: number
}

/**
 * Single shared scroll-reveal — a quiet blur + rise, once per element.
 * Fully collapses to no animation under prefers-reduced-motion.
 */
export function Reveal({ children, className, delay = 0, y = 16 }: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
