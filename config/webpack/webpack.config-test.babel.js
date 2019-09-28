/* https://github.com/sysgears/mochapack/blob/master/docs/installation/webpack-configuration.md */

import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'

import { SRC } from './paths'
import GLOBALS from './envVariables'
import rules from './rules'

module.exports = {
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
    extensions: ['.js', '.json', '.jsx'],
  },

  optimization: {
    minimize: false,
    moduleIds: 'named',
    chunkIds: 'named',
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
