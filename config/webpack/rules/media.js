import path from 'path'

import { SRC } from '../paths'
import { isProd } from '../envVariables'

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
            isProd ? '[name].[hash].[ext]' : '[name].[ext]',
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
          spriteFilename: isProd ? 'icons.[hash].svg' : 'icons.svg',
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
            isProd ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
        },
      },
    ],
  },
]
