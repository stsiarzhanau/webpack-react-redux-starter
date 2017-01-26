import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { DIST, NODE_MODULES, SRC } from './paths';
import fontRules from './rules-fonts';
import javaScriptRules from './rules-javascript';
import mediaRules from './rules-media';
import styleRules from './rules-styles';


const rules = [
  ...fontRules,
  ...javaScriptRules,
  ...mediaRules,
  ...styleRules,
];


export default {
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
    new ExtractTextPlugin({
      disable: true,
    }),
  ],

  devtool: 'eval-source-map',
};
