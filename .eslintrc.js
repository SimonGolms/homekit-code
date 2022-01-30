module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/all',
    'plugin:sonarjs/recommended',
    'plugin:typescript-sort-keys/recommended',
    // HINT: prettier must be the last extension to work
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'sonarjs',
    'sort-keys-fix',
    'typescript-sort-keys',
    'no-type-assertion',
    // HINT: prettier must be the last plugin to work
    'prettier',
  ],
  rules: {
    camelcase: 'warn',
    curly: 'error',
    'import/no-unused-modules': [
      'error',
      {
        ignoreExports: [
          'src/**/**/*.test.ts',
          '*.{js,ts}', // mostly configuration files
        ],
        missingExports: true,
        src: ['.'],
        unusedExports: true,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/prefer-default-export': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prettier/prettier': 'error',
    semi: 'error',
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'space-in-parens': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
