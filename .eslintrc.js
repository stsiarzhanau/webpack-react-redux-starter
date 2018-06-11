module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import', 'jsx-a11y', 'react'],

  env: {
    browser: true,
    node: true,
    mocha: true,
  },

  globals: {
    __DEV__: false,
    __PROD__: false,
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['src', 'node_modules'],
            extensions: ['.js', '.json', '.jsx', '.css'],
          },
        },
      },
    },
  },


  rules: {
    // import
    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        'tools/**',
        'config/**',
        '**/*.test.js',
        './*.js',
      ],
      optionalDependencies: false,
      peerDependencies: false,
    }],

    // jsx-a11y

    // react
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],

    // core
    'func-names': [2, 'as-needed'],
    semi: [2, 'never'],
    'no-unexpected-multiline': 2,
  },
};
