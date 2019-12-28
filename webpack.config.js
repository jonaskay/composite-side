const path = require('path');

module.exports = {
  entry: {
    javascript: './src/app.js',
    html: './index.html',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, loader: 'html-loader' },
    ],
  },
};
