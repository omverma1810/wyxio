import React from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

/**
 * Text component with gradient effect
 */
export default function GradientText({
  children,
  className,
  as: Component = 'span',
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        'bg-gradient-primary bg-clip-text text-transparent font-bold',
        'bg-[length:200%_auto] animate-gradient',
        className
      )}
    >
      {children}
    </Component>
  )
}
