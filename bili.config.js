const { version } = require('./package')

const banner = `/**
 * vuetify-simple-table v${version}
 * https://github.com/jasonwilczak/vuetify-simple-wizard
 * Released under the MIT License.
 */
`

module.exports = {
  banner,
  format: [
    "cjs",
    "es",
    "umd",
    "umd-min"
  ],
  compress: 'umd',
  plugins: ['vue'],
  vue: {
    css: true,
  }
}