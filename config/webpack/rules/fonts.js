import path from 'path'

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
          name: path.join(
            '[path]',
            isProd ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
        },
      },
    ],
  },
]
