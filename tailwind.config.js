/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'hs-dark': '#2a2a2a',
        'hs-darker': '#1a1a1a',
        'hs-blue': '#4a90e2',
        'hs-green': '#5cb85c',
        'hs-purple': '#9b59b6',
        'hs-orange': '#f39c12',
        'hs-red': '#e74c3c',
        'hs-teal': '#1abc9c',
        'hs-pink': '#e91e63',
        'hs-yellow': '#f1c40f',
        'hs-gray': '#95a5a6',
        'hs-light-blue': '#3498db'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      },
      fontSize: {
        'xs': '11px',
        'sm': '12px',
        'base': '13px'
      }
    },
  },
  plugins: [],
}