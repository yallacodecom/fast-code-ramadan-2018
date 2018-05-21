let path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },

  entry: './src/main.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },

  mode: 'development'
}