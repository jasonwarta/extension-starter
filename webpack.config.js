const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const TerserPlugin = require('terser-webpack-plugin');

const extensionName = 'ExtensionStarter';

const parseArgs = (env) =>
  Object.keys(env).reduce((acc, cur) => {
    const [key, value] = cur.split('=');
    acc[key] = value || env[key];
    return acc;
  }, {});

module.exports = (env) => ({
  mode: 'development',

  entry: {
    bg: './src/bg/index.js',
    popup: './src/popup/index.js',
    options: './src/options/index.js',
    cs: './src/cs/index.js',
  },

  output: {
    path: path.resolve(__dirname, `build/${parseArgs(env).browser}`),
    filename: `${extensionName}.[name].js`,
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['popup'],
      filename: `${extensionName}.popup.html`,
      template: './src/popup/index.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['bg'],
      filename: `${extensionName}.bg.html`,
      template: './src/bg/index.html',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['options'],
      filename: `${extensionName}.options.html`,
      template: './src/options/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './resources/webextensions/manifest.json', to: './manifest.json' }],
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, './extensions/src')],
        loader: 'babel-loader',
      },
      {
        test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?limit=100000',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?limit=100000',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  optimization: {
    minimizer: [new TerserPlugin()],

    splitChunks: false,
    // {
    // 	cacheGroups: {
    // 		vendors: {
    // 			priority: -10,
    // 			test: /[\\/]node_modules[\\/]/,
    // 		},
    // 	},

    // 	chunks: 'async',
    // 	minChunks: 1,
    // 	minSize: 30000,
    // 	name: true,
    // },
  },
});