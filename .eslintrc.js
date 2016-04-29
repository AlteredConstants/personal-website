module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "import"
  ],
  "globals": {
    "__moduleName": true
  },
  "rules": {
    // Disabled until eslint-import-resolver-jspm is updated for jspm 0.17.
    // https://github.com/nfl/jspm-resolve/issues/8
    "import/no-unresolved": 0
  }
/*
  "settings": {
    "import/ignore": [
      "jspm_packages",
      "node_modules"
    ],
    "import/resolve": {
      "moduleDirectory": [
        "jspm_packages",
        "src"
      ]
    },
    "import/resolver": {
      "jspm": {
        "moduleDirectory": "jspm_packages",
        "pathsOverride": {
          "pages": "src/pages"
        }
      },
      "node": true
    }
  }
*/
}
