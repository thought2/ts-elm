const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: [/elm-stuff/, /node_modules/],
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: ['elm-hot-loader', 'elm-webpack-loader'],
      },
    ],

    noParse: /\.elm$/,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.elm'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    inline: true,
    stats: { colors: true },
  },
};
