import globals from 'globals'
import jsdoc from 'eslint-plugin-jsdoc'

export default [
  {
    plugins: ['@typescript-eslint'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-unused-vars': 0,
      'vue/component-tags-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/multi-word-component-names': ['off'],
      curly: ['error', 'all'],
    },
  },
]

// {
//     "env": {
//     "browser": true,
//         "es2021": true,
//         "node": true
// },
//     "extends": [
//     "plugin:@typescript-eslint/recommended",
//     "plugin:vue/vue3-recommended",
//     "prettier"
// ],
//     "parser": "vue-eslint-parser",
//     "parserOptions": {
//     "ecmaFeatures": {
//         "jsx": true
//     },
//     "ecmaVersion": "latest",
//         "sourceType": "module",
//         "parser": "@typescript-eslint/parser"
// },
//     "plugins": [
//     "@typescript-eslint"
// ],
//     "rules": {
//     "@typescript-eslint/explicit-module-boundary-types": 0,
//         "@typescript-eslint/no-unused-vars": 0,
//         "vue/component-tags-order": [
//         "error",
//         {
//             "order": [
//                 "script",
//                 "template",
//                 "style"
//             ]
//         }
//     ],
//         "vue/padding-line-between-blocks": [
//         "error",
//         "always"
//     ],
//         "vue/multi-word-component-names": [
//         "off"
//     ],
//         "curly": [
//         "error",
//         "all"
//     ]
// },
//     "ignorePatterns": [
//     "esbuild.js",
//     "tailwind.config.js",
//     "**/dist/**",
//     "**/public/**",
//     "**/.nuxt/**",
//     "**/.output/**",
//     "**/public/**",
//     "**/composables/live2d/sdk/**"
// ]
// }
