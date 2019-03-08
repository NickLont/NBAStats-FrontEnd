const postcssNormalize =  require('postcss-normalize')
const postcssPresetEnv =  require('postcss-preset-env')

module.exports = {
  plugins: {
    cssnano: {},
    "postcss-import": {},
    "postcss-cssnext": {},
    "postcss-normalize": postcssNormalize(),
    "postcss-preset-env": postcssPresetEnv()
  }
}
