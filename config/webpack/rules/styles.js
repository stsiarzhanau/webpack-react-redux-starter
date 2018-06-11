import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { NODE_MODULES, SRC } from '../paths'
import { __PROD__ } from '../globals'

export default [
  {
    test: /\.css$/,
    include: SRC,
    use: [
      __PROD__ ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][local]',
          importLoaders: 1,
        },
      },
      'postcss-loader',
    ],
  },

  {
    test: /\.css$/,
    include: NODE_MODULES,
    use: [
      __PROD__ ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ],
  },
]
