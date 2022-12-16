/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--warna-tema)/ <alpha-value>)',
        secondary: '#D34E26',
        bgPrimary: '#FD841F',
        bgSecondary: '#E14D2A',
        sunrise: '#CD104D',
        sunset: '#9C2C77',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/image/sun.jpg')",
      },
      fontFamily: {
        Lato: 'Lato',
      },
    },
  },
  plugins: [],
};
