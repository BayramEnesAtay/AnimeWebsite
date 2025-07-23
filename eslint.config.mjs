import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", 
      // for mjs this is neceserry.
      globals: globals.browser
    },
    plugins: { js },
    rules: {
      "quotes": ["error", "double"],
      "no-multi-spaces":"error",
      "indent": "error",
      "block-spacing": "error",
      "arrow-spacing": "error",
      "no-var":"error",
      "no-lone-blocks": "error",
      "no-inline-comments":"error",
      "no-empty-function":"error",
      "no-empty":"error",
      "no-continue":"error",
      "id-denylist": ["error", "err", "e", "cb", "callback"],
      "camelcase":"error",
      "no-multiple-empty-lines": ["error", { "max": 0, "maxEOF": 0 }],
      "indent": ["error", 2],
      "block-scoped-var": "error",
      "semi": ["error", "always"],
      "no-console": "warn",
      "no-unused-vars": "warn"
    }
  }
]);
