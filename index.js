module.exports = () => ({
  presets: [
    'minify',
    // '@babel/preset-flow',
    '@babel/preset-env',
    'stage-2',
    'react'
  ],
  plugins: [
    'auto-await',
    'implicit-return',
    // 'closure-elimination'
    'preval',
    // 'macros',
    'pipe-operator',
    'strict-equality',
    ['flow-runtime'],
    'transform-decorators-legacy'
  ]
})
