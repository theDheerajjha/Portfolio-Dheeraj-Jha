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
          50: '#e6f3ff',
          100: '#b3dcff',
          200: '#5aa9ff',
          300: '#007bff',
          400: '#0056b3',
          500: '#003d82',
          600: '#002759',
          700: '#001630',
          800: '#000c1a',
          900: '#000408'
        },
        accent: {
          50: '#fff2e6',
          100: '#ffd9b3',
          200: '#ffbf80',
          300: '#ffa64d',
          400: '#ff8c1a',
          500: '#e67300',
          600: '#b35900',
          700: '#804000',
          800: '#4d2600',
          900: '#1a0d00'
        },
        neutral: {
          50: '#f5f7fa',
          100: '#e4e7eb',
          200: '#cbd2d9',
          300: '#9aa5b1',
          400: '#7b8794',
          500: '#616e7c',
          600: '#4f5d6d',
          700: '#3e4c5e',
          800: '#2d3747',
          900: '#1c2331'
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Orbitron', 'sans-serif']
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #007bff 0%, #ff8c1a 100%)',
        'grid-pattern': `
          linear-gradient(to right, rgba(55, 65, 81, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(55, 65, 81, 0.1) 1px, transparent 1px)
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
