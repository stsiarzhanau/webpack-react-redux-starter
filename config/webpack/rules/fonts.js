import { SRC } from '../paths'
import { isProd } from '../envVariables'

export default [
  {
    test: /\.(woff|woff2)$/,
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
