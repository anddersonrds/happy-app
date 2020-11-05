module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          alias: {
            '@app': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@pages': './src/pages',
            '@routes': './src/routes',
            '@styles': './src/styles',
          }
        }
      ],
    ]
  };
};
