module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],

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
    'import/prefer-default-export': 0,

    /* eslint-plugin-react */
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/prefer-stateless-function': 0,

    /* eslint-plugin-react-hooks */
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,

    /* core */
    'arrow-body-style': 0,
    'func-names': 0,
    'implicit-arrow-linebreak': 0,
    'max-len': [1, 120],
    'no-param-reassign': 0,
    'no-unexpected-multiline': 2,
    'no-useless-escape': 0,
    'object-curly-newline': 0,
    'prefer-arrow-callback': 0,
    semi: [2, 'never'],
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
