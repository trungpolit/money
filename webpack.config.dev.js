var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'www/scripts');
var APP_DIR = path.resolve(__dirname, 'www/scripts');
var debug = process.env.NODE_ENV !== "production";

module.exports = {
    entry: APP_DIR + '/index.js',
    output: {path: BUILD_DIR, filename: 'bundle.js'},
    debug: debug,
    devtool: debug ? "#eval-source-map" : "#cheap-module-source-map",
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
    plugins: debug ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin(),
            //  new webpack.optimize.AggressiveMergingPlugin()
            new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
        ],
};