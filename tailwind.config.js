module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nunito', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
      '4xl': '2000px',
    },
    extend: {
      colors: {
        pink: {
          light: '#FFE8D6',
          medium: '#DDBEA9',
          dark: '#CB997E',
        },
        green: {
          extraLight: '#F5FAE8',
          light: '#B7B7A4',
          medium: '#A5A58D',
          dark: '#6B705C',
        },
      },
      boxShadow: {
        'inner-2': 'inset 0 0 4px 4px rgba(0, 0, 0, 0.06)',
        'inner-3': 'inset 0 24px 24px 24px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')], // <-- is array
}
