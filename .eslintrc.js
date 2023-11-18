/** @type {import('eslint').ESLint.ConfigData}  */
module.exports = {
  env: {
    'jest/globals': true,
    node: true,
  },
  extends: [
    '@boehringer-ingelheim/eslint-config/base/strict',
    'plugin:jest/all',
    // HINT: prettier must be the last extension to work
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['coverage', 'lib', 'node_modules'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'jest/consistent-test-it': ['error', { fn: 'test' }],
  },
};
