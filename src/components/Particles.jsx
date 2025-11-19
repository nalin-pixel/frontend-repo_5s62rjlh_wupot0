import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Particles({ count = 50, className = '' }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -40])
  const opacity = useTransform(scrollY, [0, 400], [0.6, 0.3])

  const particles = useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }))
  ), [count])

  return (
    <motion.div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} style={{ y, opacity }}>
      {particles.map(p => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[rgba(0,217,98,0.35)] shadow-[0_0_12px_rgba(0,217,98,0.25)]"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -6, 0], x: [0, 3, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6 + p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* subtle fog */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,217,98,0.06),transparent_60%)]" />
    </motion.div>
  )
}
