module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brtgreen: {
        DEFAULT: '#d3de32'
      },
      ltblue: {
        DEFAULT: '#cbeaed'
      },
      cream: {
        DEFAULT: '##ffffdd'
      },
      teal: {
        DEFAULT: '#006a71'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
