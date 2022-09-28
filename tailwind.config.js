/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        femmy: {
          pdark: '#9C1B66',
          pmedium: '#EA92A7',
          plight: '#FBEEE5',
          pgmedium: '#D1B9DD',
          gmedium: '#E5E9EC',
          white: '#FFFFFF',
        },
      },
      fontSize: {
        textNav: ['16px'],
      },
      fontFamily: {
        head: ['NewYork'],
        sans: ['WorkSans-Regular'],
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp')],
};
