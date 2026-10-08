/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1B3A',
          dark: '#071228',
          card: '#13274F'
        },
        amber: {
          DEFAULT: '#F5B800',
          hover: '#E0A800'
        },
        emerald: {
          DEFAULT: '#16A36A'
        },
        lightbg: '#F5F8FC'
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
