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
            extensions: ['.js', '.json', '.jsx'],
          },
        },
      },
    },
  },


  rules: {
    /* eslint-plugin-import */
    'import/extensions': [2, 'never'],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        'tools/**',
        'config/**',
        './*.js',
      ],
      optionalDependencies: false,
      peerDependencies: false,
    }],

    /* eslint-plugin-react */
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,

    /* core */
    'func-names': 0,
    semi: [2, 'never'],
    'no-unexpected-multiline': 2,
    'no-param-reassign': 0,
    'prefer-arrow-callback': 0,
  },

  overrides: [
    {
      files: '**/*.test.js',
      globals: {
        expect: false,
        sinon: false,
        shallow: false,
        mount: false,
        render: false,
      },
      rules: {
        /* https://github.com/eslint/eslint/issues/2102 */
        'no-unused-expressions': 0,
      },
    },
  ],
}
