/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'leo-green-lighten': '#6EF594',
        'leo-green-light': '#69E88D',
        'leo-green-normal': '#5DCF7D',
        'leo-green-dark': '#4CA866',
        'leo-green-darken': '#2F693F',
        'white-rgba-80%': 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-easing')],
};
