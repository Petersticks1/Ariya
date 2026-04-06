/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B8972A', // ARIYA Gold
          dark: '#9A7E22',
        },
        background: {
          DEFAULT: '#1A1A1A', // ARIYA Black
          cream: '#f8f5f0',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#888888',
          dark: '#1A1A1A',
        }
      },
      fontFamily: {
        serif: ['Gilda Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
