const { settings: baseImportSettings } = require('eslint-config-airbnb-base/rules/imports');

module.exports = {
  extends: [
    'eslint-config-pratsko',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-hooks',
    'eslint-config-airbnb/rules/react-a11y',
  ].map(require.resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.jsx', ...baseImportSettings['import/resolver'].node.extensions],
      },
    },
  },
  rules: {
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          'src/setupTests.js',
        ],
      },
    ],
  },
};
