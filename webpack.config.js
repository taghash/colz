const path = require('path');
// import path from 'path';
const webpack = require('webpack');

module.exports = {
  optimization: {
    minimize: false,
  },
  entry: {
    colz: path.join(__dirname, './src/colz.js'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    // @see https://webpack.js.org/guides/author-libraries/
    // https://medium.com/@albertogasparin/fixing-export-default-on-webpack-when-bundling-a-library-2fd7af010b26
    library: {
      name: 'colz',
      type: 'umd',
    },
  },
  plugins: [],
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|test)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    ],
  },
};
