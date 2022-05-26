module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': [1, 'never'],
    'react/function-component-definition': [0],
    'no-unused-vars': [1],
    'linebreak-style': [0],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
