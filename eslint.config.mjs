import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    overrides: {
      'style/jsx-one-expression-per-line': 'off',
    },
  },
  typescript: {
    overrides: {
      'ts/ban-ts-comment': 'off',
    },
  },
  vue: {
    overrides: {
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
})
