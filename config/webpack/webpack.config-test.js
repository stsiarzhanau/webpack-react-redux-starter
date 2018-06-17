/* https://github.com/zinserjan/mocha-webpack/blob/master/docs/installation/webpack-configuration.md */

import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'

import { SRC } from './paths'
import GLOBALS from './envVariables'
import rules from './rules'

export default {
  mode: 'none',
  context: SRC,

  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
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
    new SpriteLoaderPlugin(),
  ],

  devtool: 'inline-cheap-module-source-map',
  target: 'node',
  externals: [nodeExternals()],
}
