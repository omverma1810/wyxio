import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

/**
 * Premium button component with multiple variants
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-purple focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        {
          // Variants
          'bg-gradient-gold text-bg-dark hover:shadow-lg hover:shadow-accent-gold/50 hover:scale-105':
            variant === 'primary',
          'glass-strong text-text-primary hover:bg-white/20 border border-white/20':
            variant === 'secondary',
          'text-text-primary hover:bg-white/10': variant === 'ghost',
          // Sizes
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
