import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

/**
 * Glassmorphism card component with optional hover effects
 */
export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'glass rounded-2xl p-6 relative overflow-hidden',
        hover && 'hover:glass-strong hover:scale-[1.02] transition-all duration-300',
        className
      )}
      whileHover={hover ? { y: -5 } : undefined}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
      {children}
    </motion.div>
  )
}
