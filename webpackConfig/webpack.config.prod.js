import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { DIST, NODE_MODULES, SRC } from './paths';
import fontRules from './rules-fonts';
import javaScriptRules from './rules-javascript';
import mediaRules from './rules-media';
import styleRules from './rules-styles';


export default {
  context: SRC,

  entry: [
    'whatwg-fetch',
    './index',
  ],

  output: {
    filename: 'bundle.js',
    path: DIST,
    publicPath: '/',
  },

  module: {
    rules: [
      ...fontRules,
      ...javaScriptRules,
      ...styleRules,
      ...mediaRules,
    ],
  },

  resolve: {
    modules: [
      `${NODE_MODULES}`,
      `${SRC}/components`,
      `${SRC}/containers`,
    ],

    extensions: ['.js', '.json', '.jsx'],

    alias: {

    },
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.ejs`,
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].bundle.css',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      // syntax: 'scss',
    }),
    new SpriteLoaderPlugin(),
    new ImageminPlugin({
      gifsicle: {
        interlaced: true,
      },
      jpegtran: {
        progressive: true,
      },
    }),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin(),
  ],

  devtool: 'source-map',

  performance: {
    hints: 'warning',
  },

  profile: true,
};
