/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#f5f0e6',
          200: '#ede4d4',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5edd7',
          200: '#edd8ad',
          300: '#e2b66b',
          400: '#d2a24c',
          500: '#b8862e',
          600: '#a8772a',
          700: '#7a531a',
          800: '#5a3d13',
        },
        tealAccent: {
          400: '#3ec9b0',
          500: '#14a58c',
          600: '#0e7c69',
        },
        navy: {
          800: '#152244',
          900: '#101a33',
          950: '#091022',
        },
        muted: '#5f6679',
        borderGold: 'rgba(168,119,42,0.2)',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
