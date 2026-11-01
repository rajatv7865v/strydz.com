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
        strydz: {
          DEFAULT: '#31547b',
          primary: '#31547b',
          secondary: '#514f14',
          dark: '#264364',
          light: '#426c9b',
          accent: '#514f14',
        },
        creme: {
          50: '#fdfbf7',   // warm ivory
          100: '#faf7f2',  // soft natural cream
          200: '#f4efe6',  // light linen cream
          300: '#ede4d4',  // deeper accent cream
          border: '#e8e2d5', // refined border tone
        },
        darkNavy: {
          800: '#1d344d',
          900: '#152537',
          950: '#0d1824',
        },
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1.5s infinite',
        'float-reverse': 'floatReverse 5.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
}
