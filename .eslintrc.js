module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
      "node": true,
      "mocha": true,
      "browser": true
    },
    "rules": {
      "react/jsx-filename-extension": 0
    }
};
