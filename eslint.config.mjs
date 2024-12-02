import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  // {
  //   rules: {
  //     "react/react-in-jsx-scope": "off",
  //     // "prettier/prettier": [
  //     //   "error",
  //     //   {
  //     //     trailingComma: "all",
  //     //     tabWidth: 12,
  //     //     semi: false,
  //     //     singleQuote: true,
  //     //     bracketSpacing: true,
  //     //     eslintIntegration: true,
  //     //     printWidth: 120,
  //     //   },
  //     // ],
  //   },
  // },
];