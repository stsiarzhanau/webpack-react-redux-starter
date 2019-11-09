import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ImageminPlugin from 'imagemin-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import StyleLintPlugin from 'stylelint-webpack-plugin'

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
      new OptimizeCssAssetsPlugin({
        /* default css processor is cssnano */
        cssProcessorOptions: {
          preset: 'default',
        },
      }),
    ],
    moduleIds: 'hashed',
    chunkIds: 'size',
    noEmitOnErrors: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
      favicon: 'favicon.ico',
    }),
    new SpriteLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      emitErrors: false,
    }),
  ],

  devtool: false,
  target: 'web',

  performance: {
    hints: 'warning',
  },
}
