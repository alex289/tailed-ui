/** @type {import("eslint").Linter.Config} */
const config = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['src/**/*.stories.tsx'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['react', '@typescript-eslint'],
      rules: {
        semi: 'warn',
        eqeqeq: 'warn',
        curly: 'warn',
      },
    },
    {
      files: ['**.mjs'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
      },
    },
  ],
  extends: ['plugin:storybook/recommended'],
  env: {
    es6: true,
  },
};

module.exports = config;
