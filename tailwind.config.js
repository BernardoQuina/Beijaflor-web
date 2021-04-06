module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Crafter', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        pink: {
          light: '#FFE8D6',
          medium: '#CB997E',
          dark: '#CB997E',
        },
        green: {
          light: '#B7B7A4',
          medium: '#A5A58D',
          dark: '#6B705C',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [], // <-- is array
}
