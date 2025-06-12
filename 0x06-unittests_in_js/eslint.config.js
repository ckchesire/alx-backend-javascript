// eslint.config.js

import js from '@eslint/js';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
    },
    rules: {
      // Add your custom rules here
    },
  },
];
