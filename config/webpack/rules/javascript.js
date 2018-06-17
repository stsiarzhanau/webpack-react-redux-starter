import { SRC } from '../paths'
import { isProd, isCover } from '../envVariables'

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

if (isProd) {
  rules.push({
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
  })
}

/* https://github.com/zinserjan/mocha-webpack/blob/master/docs/guides/code-coverage.md */
if (isCover) {
  rules.unshift({
    test: /\.jsx?$/,
    include: SRC,
    enforce: 'post',
    use: {
      loader: 'istanbul-instrumenter-loader',
      options: { esModules: true },
    },
  })
}

export default rules
