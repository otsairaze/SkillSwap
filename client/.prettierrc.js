module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'consistent',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',

  overrides: [
    {
      files: '*.scss',
      options: { parser: 'scss' },
    },
    {
      files: '*.css',
      options: { parser: 'css' },
    },
  ],
};
