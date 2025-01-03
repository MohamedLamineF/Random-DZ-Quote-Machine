import { ESLint } from "eslint";

export default new ESLint({
  baseConfig: {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ["react", "react-hooks", "@typescript-eslint"],
    rules: {
      // add customize rules here as per your project's needs
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
});