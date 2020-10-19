import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'

import { BUILD, SRC } from './paths'
import GLOBALS from './envVariables'
import rules from './rules'


export default {
  mode: 'production',
  context: SRC,

  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'whatwg-fetch',
    './main',
  ],

  output: {
    filename: '[name].[chunkhash].js',
    path: BUILD,
    publicPath: '/',
  },

  module: {
    rules,
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },

  optimization: {
    minimize: true,

    minimizer: [
      new TerserPlugin({
        test: /\.jsx?$/i,
        parallel: 4,
      }),

      new CssMinimizerPlugin(),
    ],

    moduleIds: 'hashed',
    chunkIds: 'size',
    noEmitOnErrors: true,
    runtimeChunk: true,

    splitChunks: {
      chunks: 'all',
      enforceSizeThreshold: 50000, // will be set by default to 50k in webpack 5
    },
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),

    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
      favicon: 'favicon.ico',
    }),

    new SpriteLoaderPlugin({ plainSprite: true }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),

    new CompressionPlugin(),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),

    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      emitErrors: false,
    }),

    new ESLintPlugin({
      context: SRC,
      extensions: ['js', 'jsx'],
      emitWarning: true,
    }),
  ],

  devtool: false,
  target: 'web',

  performance: {
    hints: 'warning',
  },
}
