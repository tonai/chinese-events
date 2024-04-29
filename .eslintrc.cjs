module.exports = {
  root: true,
  extends: ["plugin:smile/react", "plugin:smile/ts"],
  env: { worker: true },
  globals: {
    workbox: true,
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    project: [
      "./packages/shared/tsconfig.json",
      "./packages/shared/tsconfig.node.json",
      "./packages/pwa/tsconfig.json",
      "./packages/pwa/tsconfig.node.json",
      "./packages/capacitor/tsconfig.json",
      "./packages/capacitor/tsconfig.node.json",
    ],
  },
  rules: {
    "@typescript-eslint/no-confusing-void-expression": "off",
    "consistent-return": "off",
    "no-confusing-void-expression": "off",
    "no-void": "off",
  },
};
