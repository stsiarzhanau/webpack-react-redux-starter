import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { NODE_MODULES, SRC } from './paths';

export default [
  {
    test: /\.css$/,
    include: [SRC],
    use: ExtractTextPlugin.extract({
      fallback: {
        loader: 'style-loader',
        options: {
          // pass loader options here
        },
      },
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            importLoaders: 1,
          },
        },

        {
          loader: 'postcss-loader',
          options: {
            // pass loader options here
          },
        },
      ],
    }),
  },

  {
    test: /\.css$/,
    include: [NODE_MODULES],
    use: ExtractTextPlugin.extract({
      fallback: {
        loader: 'style-loader',
      },
      use: [
        {
          loader: 'css-loader',
        },
      ],
    }),
  },
];
