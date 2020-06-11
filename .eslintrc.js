module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-newline': 'off', // Incompatible with prettier
    'react/jsx-one-expression-per-line': 'off',
    // 允许jsx存在js中
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
