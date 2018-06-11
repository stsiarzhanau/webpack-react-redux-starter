import path from 'path'

import { SRC } from '../paths'
import { __PROD__ } from '../globals'

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
            __PROD__ ? '[name].[hash].[ext]' : '[name].[ext]',
          ),
        },
      },
    ],
  },
]
