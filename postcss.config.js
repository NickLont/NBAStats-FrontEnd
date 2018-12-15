const postcssNormalize =  require('postcss-normalize')

module.exports = {
  plugins: {
    cssnano: {},
    "postcss-import": {},
    "postcss-cssnext": {},
    "postcss-normalize": postcssNormalize()
  }
}
