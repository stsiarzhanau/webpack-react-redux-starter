import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import { DIST, SRC } from './paths';
import rules from './rules';

export default {
  mode: 'production',
  context: SRC,

  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    './index',
  ],

  output: {
    filename: '[name].[chunkhash].js',
    path: DIST,
    publicPath: '/',
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
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].bundle.css',
    }),
    new SpriteLoaderPlugin(),
    new ImageminPlugin({
      gifsicle: {
        interlaced: true,
      },
      jpegtran: {
        progressive: true,
      },
      svgo: null,
    }),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      // syntax: 'scss',
    }),
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.jsx?$/i,
        parallel: 4,
        sourceMap: true,
      }),
    ],
  },

  devtool: 'source-map',

  performance: {
    hints: 'warning',
  },

  profile: true,
};
