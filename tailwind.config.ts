import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#6B46C1',
          blue: '#2563EB',
        },
        secondary: {
          midnight: '#0F172A',
          slate: '#1E293B',
        },
        accent: {
          gold: '#F59E0B',
          emerald: '#10B981',
          rose: '#E879F9',
        },
        bg: {
          dark: '#020617',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6B46C1 0%, #2563EB 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(252, 50%, 50%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(220, 70%, 50%, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(280, 50%, 50%, 0.2) 0px, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(107, 70, 193, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(37, 99, 235, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
