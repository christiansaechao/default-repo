import eslintPluginReact from 'eslint-plugin-react'
import eslintJs from '@eslint/js'

const { configs: js } = eslintJs

export default [
  js.recommended,
  {
    plugins: {
      react: eslintPluginReact,
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
    },
  },
]
