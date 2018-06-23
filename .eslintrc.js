module.exports = {
  "env": {
    // https://stackoverflow.com/questions/42377038/error-document-is-not-defined-eslint-react
    "browser": true
  },

  "extends": [
    "eslint:recommended",
    // https://www.npmjs.com/package/eslint-plugin-react#recommended
    "plugin:react/recommended"
  ],

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2016,
    "sourceType": "module"
  },

  "plugins": [
    "react"
  ],

  "rules": {
    "guard-for-in": 0,
    "no-invalid-this": 0,
    "no-new-object": 0,
    "quotes": [2, "backtick"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "require-jsdoc": 0
  },

  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "15.0", // React version, default to the latest React stable release
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                   // propTypes object, e.g. `forbidExtraProps`.
                                                   // If this isn't set, any propTypes wrapped in
                                                   // a function will be skipped.
  }
};
