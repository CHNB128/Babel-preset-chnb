module.exports = () => ({
  presets: [
    require('@babel/preset-env'),
    require('@babel/preset-flow')
  ],
  plugins: [
    require('babel-plugin-auto-await'),
    require('babel-plugin-implicit-return'),
    require('babel-plugin-closure-elimination'),
    require('babel-plugin-macros'),
    require('babel-plugin-pipe-operator'),
  ]
})
