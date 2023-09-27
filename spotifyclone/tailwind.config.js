/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '425px',
        'sxs': '376px',
        'tine': '320px',
      },
    },
  },
  plugins: [],
}