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
        'white-rgba-80%': 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
