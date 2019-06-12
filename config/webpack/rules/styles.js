/* post-css settings are in postcss.config.js */

import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { SRC } from '../paths'
import { isProd } from '../envVariables'

export default [
  {
    test: /\.module\.css$/,
    include: SRC,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
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
    test: /^((?!\.module\.).)*\.css$/,
    use: [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      'postcss-loader',
    ],
  },
]
