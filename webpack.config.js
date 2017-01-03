var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'www/scripts');
var APP_DIR = path.resolve(__dirname, 'www/scripts');

module.exports = {
    entry: APP_DIR + '/index.js',
    output: { path: BUILD_DIR, filename: 'bundle.js' },
	debug: true,
    devtool: "#eval-source-map",
    module: {
        loaders: [
          {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: ['es2015', 'react']
              }
          }
        ]
    },
};