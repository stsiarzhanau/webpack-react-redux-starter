import path from 'path';

import { SRC } from './paths';

const env = process.env.NODE_ENV;

export default [
  {
    test: /\.(gif|jpe?g|png|webp)$/,
    include: SRC,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: path.join('[path]',
            (env === 'production') ? '[name].[hash:8].[ext]' : '[name].[ext]'),
          limit: 10000,
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
          symbolId: 'icon-[name]',
          // extract: true,
          // spriteFilename: 'icons.svg',
        },
      },
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            // { removeXMLNS: true },
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
        loader: 'url-loader',
        options: {
          name: path.join('[path]',
            (env === 'production') ? '[name].[hash:8].[ext]' : '[name].[ext]'),
          limit: 10000,
        },
      },
    ],
  },
];
