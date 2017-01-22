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

  settings: {
    'import/resolver': {
      webpack: {
        config: './webpackConfig/webpack.config.dev.js',
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
