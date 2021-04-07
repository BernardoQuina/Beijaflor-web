module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Coves', 'Arial', 'sans-serif']
    },
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '2000px'
      },
      colors: {
        pink: {
          light: '#FFE8D6',
          medium: '#DDBEA9',
          dark: '#CB997E',
        },
        green: {
          extraLight: '#D6E4D8',
          light: '#B7B7A4',
          medium: '#A5A58D',
          dark: '#6B705C',
        },
      },
    },
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ], // <-- is array
}
