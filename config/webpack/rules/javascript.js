import { SRC } from '../paths'
import { isProd, isCover, isTest } from '../envVariables'


const targets = isTest ? { node: 'current' } : undefined


const rules = [
  {
    test: /\.jsx?$/,
    include: SRC,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['@babel/preset-env', {
              targets,
              modules: false,
              // debug: true,
              // eslint-disable-next-line max-len
              // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpreset-env
              corejs: '3.6.4',
              useBuiltIns: 'usage',
              shippedProposals: true,
            }],
            '@babel/preset-react',
          ],
          plugins: [
            /* https://github.com/gaearon/react-hot-loader#getting-started */
            'react-hot-loader/babel',

            // Stage 0
            '@babel/plugin-proposal-function-bind',

            // Stage 1
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-logical-assignment-operators',
            ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
            '@babel/plugin-proposal-do-expressions',

            // Stage 2
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-function-sent',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-numeric-separator',
            '@babel/plugin-proposal-throw-expressions',

            // Stage 3
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-import-meta',
            ['@babel/plugin-proposal-class-properties', { loose: false }],
            '@babel/plugin-proposal-json-strings',
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

/* https://github.com/sysgears/mochapack/blob/master/docs/guides/code-coverage.md */
if (isCover) {
  rules.unshift({
    test: /\.jsx?$/,
    include: SRC,
    // enforce: 'post',
    use: {
      loader: 'istanbul-instrumenter-loader',
      options: { esModules: true },
    },
  })
}


export default rules
