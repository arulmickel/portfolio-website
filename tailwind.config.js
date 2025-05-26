/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables dark mode using class strategy
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A202C', // text color
        accent: '#3182CE',  // brand accent blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
