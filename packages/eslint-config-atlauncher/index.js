const rules = [
    './rules/base'
].map(require.resolve);

module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        ...rules
    ],
    env: {
        node: true,
        es6: true,
        browser: true,
        mocha: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    plugins: [
        'import',
        'jsx-a11y',
        'react'
    ],
    rules: {}
};