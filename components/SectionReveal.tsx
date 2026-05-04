'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

export default function SectionReveal({ children, delay = 0, className = '' }: Props) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: prefersReduced ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
