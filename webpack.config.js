const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolveConfig = {
  root: path.resolve('./src'),
  extensions: ['', '.js', '.jsx'],
};
const moduleConfig = {
  preLoaders: [
    { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
  ],
  loaders: [
    { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?modules&localIdentName=[name]__[local]___[hash:base64:5]'
      ),
      exclude: /node_modules/,
    },
  ],
};

module.exports = [
  {
    name: 'client',
    entry: 'main',
    output: {
      path: path.resolve('./build/public'),
      filename: 'bundle.js',
    },
    resolve: resolveConfig,
    module: moduleConfig,
    devtool: 'sourcemap',
    plugins: [new ExtractTextPlugin('screen.css')],
  },
  {
    name: 'server',
    entry: 'server',
    output: {
      path: path.resolve('./build'),
      filename: 'server.js',
    },
    target: 'node',
    node: {
      __filename: false,
      __dirname: false,
    },
    externals: [nodeExternals()],
    resolve: resolveConfig,
    module: moduleConfig,
    devtool: 'sourcemap',
    plugins: [
      new ExtractTextPlugin('screen.css'),
      new webpack.BannerPlugin(
        'require("source-map-support").install();',
        { raw: true, entryOnly: false }
      ),
    ],
  },
];
