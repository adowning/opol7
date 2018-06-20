{
  [
 
  "plugins": ["vue", "flowtype", "flowtype-errors"],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "globals": {},
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended",
    "plugin:flowtype/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      },
      "babel-plugin-root-import": {
        "rootPathPrefix": "~",
        "rootPathSuffix": "src/api"
      }
    }
  },
  "rules": {
    "import/extensions": ["error", "always", { "js": "never", "vue": "never" }],
    "import/prefer-default-export": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "flowtype-errors/show-errors": "error",
    "flowtype-errors/show-warnings": "warn",
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": ["state", "acc", "event"]
      }
    ],

    "function-paren-newline": "off",
    "max-len": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "object-curly-newline": ["error", { "consistent": true }],
    "semi": ["warn", "never"]
  }
]
}
