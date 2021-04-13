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
  plugins: ['vue'],
  rules: {
    'max-len': [
      'error',
      { code: 100 },
    ],
    quotes: [
      2,
      'single',
      { avoidEscape: true },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    semi: [
      'error',
      'never',
    ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false },
    ],
    'object-curly-newline': [
      'error',
      { minProperties: 2 },
    ],
    'array-element-newline': [
      'error',
      { minItems: 2 },
    ],
    'array-bracket-newline': [
      'error',
      { minItems: 2 },
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: [
          'pre',
          'textarea',
        ],
      },
    ],
  },
}
