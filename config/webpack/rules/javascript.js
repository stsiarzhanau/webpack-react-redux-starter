import { SRC } from '../paths'
import { __PROD__ } from '../globals'

const rules = [
  {
    test: /\.jsx?$/,
    include: SRC,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          plugins: ['react-hot-loader/babel'],
          presets: [
            ['latest', { es2015: { modules: false } }],
            'stage-3',
            'react',
          ],
        },
      },
    ],
  },
]

if (__PROD__) {
  const eslintRule = {
    test: /\.jsx?$/,
    include: SRC,
    enforce: 'pre',
    use: [
      {
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  }

  rules.push(eslintRule)
}


export default rules
