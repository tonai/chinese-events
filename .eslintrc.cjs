module.exports = {
  root: true,
  extends: ["plugin:smile/react", "plugin:smile/ts"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
  },
  rules: {
    "@typescript-eslint/no-confusing-void-expression": "off",
    "consistent-return": "off",
    "no-confusing-void-expression": "off",
    "no-void": "off",
  },
};
