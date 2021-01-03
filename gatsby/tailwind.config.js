module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkest-blue': '#151A26',
        'darker-blue': '#202B45',
        'dark-blue': '#39496A',
        'light-blue': '#A4C9EE',
        'off-white': '#F0F7FE'

        // lightest: '#F0F7FE',
        // light: '#A4C9EE',
        // DEFAULT: '#39496A',
        // dark: '#202B45',
        // darkest: '#151A26'

      }
    }

  },
  variants: {
    extend: {}
  },
  plugins: []
}

/* Dark Blue BG: #151A26 */
/* Primary Dark Blue: #202B45 */
/* Secondary Dark Blue: #39496A */
/* Light Blue: #A4C9EE */
/* White: #F0F7FE */
