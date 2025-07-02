module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended"
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"]
      }
    ],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
    // "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
