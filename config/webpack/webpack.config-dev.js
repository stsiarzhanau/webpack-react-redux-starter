import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'

import { DIST, SRC } from './paths'
import GLOBALS from './envVariables'
import rules from './rules'

export default {
  mode: 'development',
  context: SRC,

  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    'webpack-hot-middleware/client',
    './index',
  ],

  output: {
    filename: '[name].js',
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

  optimization: {
    minimize: false,
    namedModules: true,
    noEmitOnErrors: true,
  },

  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
      favicon: 'favicon.ico',
    }),
    new SpriteLoaderPlugin(),
  ],

  devtool: 'eval-source-map',
  target: 'web',

  performance: {
    hints: false,
  },
}
