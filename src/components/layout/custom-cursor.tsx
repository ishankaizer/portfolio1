import { useEffect, useRef } from 'react'

/**
 * A circular cursor that follows the pointer with mechanical smoothing and
 * grows over interactive elements. Fine-pointer devices only (never touch),
 * and it snaps instantly under prefers-reduced-motion. Enhancement only:
 * the element is inert until the effect wires it up, and with JS off the
 * native cursor is untouched.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const el = ref.current
    if (!el) return
    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let curX = targetX
    let curY = targetY
    let shown = false
    let raf = 0

    const render = () => {
      const k = reduce ? 1 : 0.2
      curX += (targetX - curX) * k
      curY += (targetY - curY) * k
      el.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    const interactive =
      'a, button, [role="button"], [data-cursor="grow"], input, textarea, select, label'
    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!shown) {
        shown = true
        el.style.opacity = '1'
      }
      const target = e.target as Element | null
      el.dataset.hover = target?.closest?.(interactive) ? 'true' : 'false'
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }
    const onDown = () => (el.dataset.down = 'true')
    const onUp = () => (el.dataset.down = 'false')

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      root.classList.remove('has-custom-cursor')
    }
  }, [])

  return <div ref={ref} className="custom-cursor" aria-hidden style={{ opacity: 0 }} />
}
