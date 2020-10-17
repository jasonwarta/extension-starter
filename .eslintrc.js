/**
 * This file configures eslint.  These rules are not enforced in any way
 * but they may show up in your editor if you have the appropriate plugins.
 *
 * Feel free to disable rules you don't like, just document them below.
 */
const ERR = 2;
const WARN = 1;
const OFF = 0;

module.exports = {
  root: true, // Stop looking for any other config.
  env: {
    browser: true, // Don't complain about browser globals.
    node: true, // Don't complain about node globals.
    es6: true, // Modern JS reserved words
    mocha: true, // Testing Globals
    jest: true, //  Testing Globals
  },
  extends: [
    // Avoid basic javascript footguns (https://eslint.org/docs/rules/)
    'eslint:recommended',
    // Avoid basic react footguns. (https://github.com/yannickcr/eslint-plugin-react/blob/master/README.md)
    'plugin:react/recommended',
    // Don't fight with prettier (disables formatting rules, should not cause problems.)
    'prettier',
    'prettier/react',
  ],
  // Let eslint know we're using babel/webpack.
  parser: 'babel-eslint',
  // Don't complain about JSX.
  plugins: ['react'],
  rules: {
    // Be grumpy (not angry) about not declaring proptypes.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': WARN,
    // Be grumpy (not angry) about console logs on frontend.
    'no-console': WARN,
    // Ignore class assign, as it is frequent practice with HOC decorators in React.
    'no-class-assign': OFF,
    // Enable a few non-defaults.
    complexity: WARN,
    'no-empty-function': WARN,
    'no-floating-decimal': WARN,
    'no-return-assign': ERR,
    'no-shadow': WARN,
    'no-throw-literal': WARN,
    'no-var': ERR,
    'prefer-spread': WARN,
  },
  settings: {
    react: {
      // Enable rules based on react version.
      version: '16.0',
    },
  },
};
