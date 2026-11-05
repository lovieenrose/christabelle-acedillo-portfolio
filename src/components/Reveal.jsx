import { motion, useReducedMotion } from 'framer-motion'

// Subtle fade-in. Skipped entirely when the visitor prefers reduced motion.
export default function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  )
}
