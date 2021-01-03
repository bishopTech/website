module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkest-blue': '#0A1321',
        'darker-blue': '#202B45',
        'dark-blue': '#39496A',
        'light-blue': '#A4C9EE',
        'off-white': '#F0F7FE'
      }
    }

  },
  variants: {
    extend: {}
  },
  plugins: []
}

/* Dark Blue BG: #151A26 or #0A1321 */
/* Primary Dark Blue: #202B45 */
/* Secondary Dark Blue: #39496A */
/* Light Blue: #A4C9EE */
/* White: #F0F7FE */
