/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-neutral': '#4A4A4A',
        'main-color': '#041e22',
        'secondary-color': '#0e464f',
        'accent': '#24A0B5',
        'button-color': '#23a0b5'
      },
    },
    fontFamily: {
      roboto: ['roboto', 'sans-serif'],
      jejuMyeongjo: ['jejumyeongjo', 'serif'],
      roadRage: ['roadRage', 'sans-serif'],
    },
  },
  plugins: [],
}