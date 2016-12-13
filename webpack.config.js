let webpack = require('webpack');
let path = require('path');


module.exports = {
  entry: {
    editor: './src/editor',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: __dirname + '/src/'
    }],
  },
    // {
      // test: /\.json$/,
      // loaders: ['json-loader'],
    // }
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
  },
};
