module.exports = {
    parser: "@typescript-eslint/parser",
    env: { node: true },
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    rules: { semi: ["error", "never"], quotes: ["error", "double"], "quote-props": ["error", "as-needed"], "prefer-arrow-callback": ["error"] },
}
