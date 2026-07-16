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
 * Single shared scroll-reveal: a quiet blur + rise as the element enters view,
 * once per element. Triggers on a slice of the element actually being visible
 * (so it visibly pops in, rather than pre-revealing off-screen). Reduced motion
 * keeps a gentle opacity fade instead of going fully static.
 */
export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduce ? 0.5 : 0.65, delay, ease: [0.16, 0.84, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
