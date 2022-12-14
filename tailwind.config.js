/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'redHat': ['Red Hat Display']
      },
      fontWeight: {
        '900': [900],
        '500': [500],
        '400': [400],
        '700': [700],
        '600': [600],
      },
    },
  },
  plugins: [],
}