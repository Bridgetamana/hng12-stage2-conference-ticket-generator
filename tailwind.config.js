/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-neutral': '#4A4A4A',
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