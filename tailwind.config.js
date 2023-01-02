/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'bestview 5s linear infinite',
      },
      keyframes: {
        bestview: {
          '0%, 100%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(180deg)' },
        },
      },
      colors: {
        primary: 'rgb(var(--warna-tema)/ <alpha-value>)',
        secondary: '#D34E26',
        bgPrimary: '#FD841F',
        bgSecondary: '#E14D2A',
        sunrise: '#CD104D',
        sunset: '#9C2C77',
        bgMain: '#511845',
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
