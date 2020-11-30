
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './demo'),
  entry: {
    app: ['./index.js','../src/App.js']
  },
  output: {
    path: path.resolve(__dirname, './demo'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
      // query: {
      //   presets:["@babel/preset-env", "@babel/preset-react"]
      // }
    }]
  }
};
