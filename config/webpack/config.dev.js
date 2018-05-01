import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

import { DIST, SRC } from './paths';
import rules from './rules';


export default {
  mode: 'development',
  context: SRC,

  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './index',
  ],

  output: {
    filename: 'bundle.js',
    path: DIST,
    publicPath: '/',
    pathinfo: true,
  },

  module: {
    rules,
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
    }),
    new SpriteLoaderPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      // syntax: 'scss',
    }),
  ],

  devtool: 'eval-source-map',
};
