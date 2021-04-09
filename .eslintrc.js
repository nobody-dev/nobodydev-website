module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': [
      'error', { code: 100 },
    ],
    quotes: [
      2,
      'single',
      { avoidEscape: true },
    ],
    'comma-dangle': [
      'error', 'always-multiline',
    ],
    semi: [
      'error', 'never',
    ],
    'array-element-newline': [
      'error', { minItems: 3 },
    ],
    'array-bracket-newline': [
      'error', 'always',
    ],
    'vue/singleline-html-element-content-newline': [
      'error', {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: [
          'pre', 'textarea',
        ],
      },
    ],
  },
}
