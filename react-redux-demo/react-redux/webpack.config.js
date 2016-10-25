var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch', './src/index.jsx'],

  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel'
      },
      {test: /\.html$/, loader: 'raw'},
      {test: /.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      }
    ]
    // ,
    // noParse: [path.join(__dirname, 'node_modules')]
  },

  devServer: {
    historyApiFallback: true
  }
};
