module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  parser: "@typescript-eslint/parser",
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: [2, "always"],
    indent: ["off", 2],
    quotes: "off",
    "comma-dangle": "off",
    "space-before-function-paren": ["error", "never"],
  },
};
