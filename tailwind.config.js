/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '530px',
      },
      colors: {
        black: '#0C145A',
        purple: '#4D17E2',
      },
    },
  },
  plugins: [],
};
