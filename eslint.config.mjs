import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  stylistic: {
    indent: 2,
    quotes: 'single',
    overrides: {
      'antfu/top-level-function': 'off',
      'no-console': 'warn',
      'unused-imports/no-unused-vars': 'warn',
      'ts/no-namespace': 'off',
      'ts/no-use-before-define': 'offS',
    },
  },
  typescript: true,
  vue: true,
  formatters: {
    css: true,
    prettierOptions: {
      tabWidth: 2,
      useTabs: false,
    },
  },
  ignores: ['**/node_modules/**', '**/dist/**', 'README.md'],
})
