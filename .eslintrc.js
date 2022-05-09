module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb-base/legacy",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    semi: "off",
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],

    "linebreak-style": 0,
    indent: "off",
    "operator-linebreak": "off",
    "no-shadow": "off",
    "no-param-reassign": "off",
    "semi-spacing": "off",
    "no-use-before-define": "off",
    "implicit-arrow-linebreak": ["error", "below"],
    "no-restricted-syntax": "off",
    "nonblock-statement-body-position": "off",
    "spaced-comment": "off",
    "no-unused-expressions": "off",
    "no-restricted-globals": "off",
    "no-lonely-if": "off",
    "no-alert": "off",
    "no-nested-ternary": "off",
    "function-paren-newline": "off",
    "operator-assignment": "off",
    "prefer-regex-literals": "off",
  },
}
