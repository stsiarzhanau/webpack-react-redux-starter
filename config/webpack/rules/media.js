import path from 'path'

import { SRC } from '../paths'
import { __PROD__ } from '../globals'

export default [
  {
    test: /\.(gif|jpe?g|png|webp)$/,
    include: SRC,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: path.join(
            '[path]',
            __PROD__ ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
          limit: 10000,
        },
      },
    ],
  },

  {
    test: /\.svg$/,
    include: SRC,
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: __PROD__ ? 'icons.[hash].svg' : 'icons.svg',
        },
      },
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            // TODO
          ],
        },
      },
    ],
  },

  {
    test: /\.(mp4|m4a|webm|ogv|oga|ogg|mp3|wav)$/,
    include: SRC,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: path.join(
            '[path]',
            __PROD__ ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
        },
      },
    ],
  },
]
