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
        jdNavy: {
          DEFAULT: '#0B3041',
          50: '#f0f5f8',
          100: '#d9e7ee',
          200: '#b3d0dd',
          700: '#14465d',
          800: '#0e394c',
          900: '#0B3041',
          950: '#071f2b',
        },
        jdOrange: {
          DEFAULT: '#FF7D04',
          hover: '#e56f00',
          light: '#fff4eb',
        },
        jdBlue: {
          DEFAULT: '#019ECA',
          hover: '#018db5',
          light: '#e6f7fc',
        },
        jdSky: {
          DEFAULT: '#0090FF',
        },
        jdFooter: {
          DEFAULT: '#D9D9D9',
          dark: '#c4c4c4',
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
