const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Overpass', 'sans-serif']
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'greyCustom': {
          300: '#959eac',
          500: '#7c8798',
          700: '#252d37',
          900: '#121417'
        },
        'orangeCustom': {
          900: '#fb7413'
        }
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
        addVariant('current', '&.active');
    })
],
}