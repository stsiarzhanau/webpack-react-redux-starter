/* post-css settings are in postcss.config.js */

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { NODE_MODULES, SRC } from '../paths'
import { isProd } from '../envVariables'

export default [
  {
    test: /\.css$/,
    include: SRC,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][local]',
          // sourceMap: isDev,
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          // sourceMap: isDev,
        },
      },
    ],
  },

  {
    test: /\.css$/,
    include: NODE_MODULES,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ],
  },
]
