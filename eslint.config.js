// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const unusedImports = require('eslint-plugin-unused-imports');
const importPlugin = require('eslint-plugin-import');
const prettierRecommended = require('eslint-plugin-prettier/recommended');

/** Must match `prefix` in angular.json */
const APP_PREFIX = 'app';

const tsconfigRootDir = __dirname;

const nodeRestrictedImports = {
  paths: [
    'assert',
    'buffer',
    'child_process',
    'cluster',
    'crypto',
    'dgram',
    'dns',
    'domain',
    'events',
    'freelist',
    'fs',
    'http',
    'https',
    'module',
    'net',
    'os',
    'path',
    'punycode',
    'querystring',
    'readline',
    'repl',
    'smalloc',
    'stream',
    'string_decoder',
    'sys',
    'timers',
    'tls',
    'tracing',
    'tty',
    'url',
    'util',
    'vm',
    'zlib',
  ].map((name) => ({
    name,
    message: 'Node.js APIs are not available in the browser.',
  })),
};

/** Shared TypeScript rules (ported from your legacy .eslintrc) */
/** @type {import('eslint').Linter.RulesRecord} */
const tsRules = {
  // @typescript-eslint/lines-between-class-members was removed in typescript-eslint v8
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  'class-methods-use-this': 'off',
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'import/prefer-default-export': 'off',
  'no-param-reassign': ['error', { props: false }],
  'max-len': [
    'warn',
    {
      code: 120,
      ignorePattern: '^import .*|^export .*',
    },
  ],
  '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: APP_PREFIX, style: 'camelCase' }],
  '@angular-eslint/component-selector': ['error', { type: 'element', prefix: APP_PREFIX, style: 'kebab-case' }],
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'off',
        parameterProperties: 'explicit',
      },
    },
  ],
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/explicit-function-return-type': 'error',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': 'warn',
  '@angular-eslint/prefer-on-push-component-change-detection': 'error',
  'no-alert': 'error',
  'no-debugger': 'error',
  'no-restricted-imports': ['error', nodeRestrictedImports],
  'no-underscore-dangle': 'off',
};

module.exports = defineConfig([
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      '.angular/**',
      'projects/**/*',
      'mocks/**/*',
      'src/app/core/firebase.secrets.ts',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, angular.configs.tsRecommended],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir,
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      import: importPlugin,
    },
    processor: angular.processInlineTemplates,
    rules: tsRules,
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended],
    rules: {},
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      'no-restricted-imports': 'off',
    },
  },
  prettierRecommended,
]);
