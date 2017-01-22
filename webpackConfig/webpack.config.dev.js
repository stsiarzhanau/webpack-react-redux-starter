import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { DIST, NODE_MODULES, SRC } from './paths';
import rules from './rules';


module.exports = {
  context: SRC,

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './index_hot',
  ],

  output: {
    filename: 'bundle.js',
    path: DIST,
    publicPath: '/',
  },

  module: {
    rules,
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
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.ejs`,
    }),
  ],

  devtool: 'eval-source-map',
};
