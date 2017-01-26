import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { SRC } from './paths';

export default [
  {
    test: /\.css$/,
    include: SRC,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: {
        loader: 'style-loader',
        options: {
          // pass loader options here
        },
      },
      loader: [
        {
          loader: 'css-loader',
          options: {
            // pass loader options here
          },
        },
      ],
    }),
  },
];
