module.exports = babelJest.createTransformer({
  presets: [
    require.resolve('babel-plugin-transform-decorators-legacy'),
  ],
  babelrc: false,
});