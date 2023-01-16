module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/all',
    'plugin:sonarjs/recommended',
    'plugin:typescript-sort-keys/recommended',
    // HINT: prettier must be the last extension to work
    'prettier',
  ],
  ignorePatterns: ['coverage', 'lib', 'node_modules'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'sonarjs',
    'sort-keys-fix',
    'typescript-sort-keys',
    // HINT: prettier must be the last plugin to work
    'prettier',
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    camelcase: 'warn',
    curly: 'error',
    'import/no-cycle': 'error',
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
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    // Required to fix sort-keys automatically, since this is not done by default.
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
