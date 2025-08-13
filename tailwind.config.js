/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75'
        },
        neutral: {
          50: '#f7f8fb',
          100: '#eef1f7',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1f2937',
          900: '#0b1220'
        }
      },
      fontFamily: {
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
        'display': ['Sora', 'sans-serif']
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)',
        'grid-pattern': `
          linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
        `,
      },
      animation: {
        'code-blink': 'code-blink 1s infinite',
        'tech-pulse': 'tech-pulse 2s infinite',
      },
      keyframes: {
        'code-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'tech-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
