import { SRC } from './paths';

export default [
  {
    test: /\.jsx?$/,
    include: SRC,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            ['latest', { es2015: { modules: false } }],
            'stage-3',
            'react',
          ],

          env: {
            development: {
              plugins: [
                'react-hot-loader/babel',
              ],
            },

            production: {
              // TODO
            },
          },

          babelrc: false,
        },
      },
    ],
  },

  {
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
  },
];
