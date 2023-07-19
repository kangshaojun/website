module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        defaultbg: {
          light: '#fefffe',
          DEFAULT: '#fefffe',
          dark: '#fefffe',
        },
        defaultcontainer: {
          light: '#f6f8fc',
          DEFAULT: '#f6f8fc',
          dark: '#f6f8fc',
        },
        defaultheader: {
          light: '#18202b',
          DEFAULT: '#18202b',
          dark: '#18202b',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true
  }
}
