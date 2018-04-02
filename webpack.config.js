const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const entry_map = {
    'index': './public/index/index.js',
}
module.exports = {
    entry: entry_map,
    devtool: 'source-map',
    output: {
        path: path.resolve(process.cwd(), 'dist/'),
        filename: '[name].js',
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [{
                test: /\.js[x]?$/,
                exclude: /(node_modules)|(global\/lib\/)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&-convertValues!sass-loader?sourceMap')
            }
        ]
    }
}