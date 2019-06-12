import { SRC } from '../paths'
import { isProd } from '../envVariables'

export default [
  {
    test: /\.(gif|jpe?g|png|webp)$/,
    include: SRC,
    use: [
      {
        loader: 'file-loader',
        options: {
          /* [path] refers to the path of the file relative to entry. */
          name: isProd ? '[path][name].[hash].[ext]' : '[path][name].[ext]',
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
          /* [path] refers to the path of the file relative to entry. */
          name: isProd ? '[path][name].[hash].[ext]' : '[path][name].[ext]',
        },
      },
    ],
  },
]
