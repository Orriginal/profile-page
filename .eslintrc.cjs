/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  'extends': ["plugin:vue/vue3-recommended", "plugin:vue/vue3-strongly-recommended", "plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript", "@vue/eslint-config-prettier/skip-formatting", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    node: true
  },
  rules: {
    "vue/multi-word-component-names": ["off", {
      "ignores": ["index"]
    }]
  }
};