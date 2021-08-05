module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: [1, 'never'],
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'react/forbid-prop-types': 0,
    'no-unused-vars': [1],
    'react-hooks/exhaustive-deps': 0,
    'no-return-assign': 0,
    'max-len': 0,
  },
}
