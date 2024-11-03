// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginVue from "eslint-plugin-vue";


// export default [
//   {files: ["**/*.{js,mjs,cjs,vue}"]},
//   {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...pluginVue.configs["flat/essential"],
// ];

//////////////////////////
// module.exports = {
//   root: true,
//   parser: 'hermes-eslint',
//   plugins: [
//     'ft-flow'
//   ],
//   extends: [
//     'eslint:recommended',
//     'plugin:ft-flow/recommended',
//     'prettier',
//   ],
// };

/////////////////////////



require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'hermes-eslint',
  plugins: [
    'ft-flow'
+     'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:ft-flow/recommended',
+     'plugin:jest/recommended',
  ],
};