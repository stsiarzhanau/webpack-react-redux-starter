import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'

import { BUILD, SRC } from './paths'
import GLOBALS from './envVariables'
import rules from './rules'

export default {
  mode: 'development',
  context: SRC,

  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    'whatwg-fetch',
    'webpack-hot-middleware/client',
    './main',
  ],

  output: {
    filename: '[name].js',
    path: BUILD,
    publicPath: '/',
  },

  module: {
    rules,
  },

  resolve: {
    alias: {
      /* https://github.com/hot-loader/react-dom#webpack */
      'react-dom': '@hot-loader/react-dom',
    },
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
