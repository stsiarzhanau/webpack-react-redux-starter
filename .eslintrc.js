module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',

  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],

  env: {
    browser: true,
    node: true,
    mocha: true,
  },

  globals: {

  },

  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: './webpackConfig/webpack.config.dev.js',
  //     },
  //   },
  // },

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: [
              './node_modules',
              './src/components',
              './src/containers',
            ],
            extensions: ['.js', '.jsx'],
          },
        },
      },
    },
  },


  rules: {
    'func-names': [2, 'as-needed'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        'tools/**',
        'webpackConfig/**',
        '**/*.test.js',
      ],
    }],
  },
};
