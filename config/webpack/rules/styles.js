import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { NODE_MODULES, SRC } from '../paths';

const devMode = process.env.NODE_ENV !== 'production';

export default [
  {
    test: /\.css$/,
    include: SRC,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          importLoaders: 1,
        },
      },
      'postcss-loader',
    ],
  },

  {
    test: /\.css$/,
    include: NODE_MODULES,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
    ],
  },
];
