import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:  '#2C2C2C',
          white:  '#FFFFFF',
          bg: {
            DEFAULT: '#232112',
            card:    '#545F37',
          },
          accent: '#C9A227',
        },
      },
      fontFamily: {
        heading: ['var(--font-lora)', 'serif'],
        body:    ['var(--font-poppins)', 'sans-serif'],
        sans:    ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 162, 39, 0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(201, 162, 39, 0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
