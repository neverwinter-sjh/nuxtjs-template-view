module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 0,
    'max-len': 'off',
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ], // for (let i = 0; i < 10; i++)
    'no-underscore-dangle': ['error', { allow: ['_data', '_name'] }], // for this._data,
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
