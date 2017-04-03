/* eslint-disable filenames/no-index */

const rules = [
    './rules/base',
    './rules/filenames'
].map(require.resolve);

module.exports = {
    plugins: [
        'import',
        'jsx-a11y',
        'react',
        'promise',
        'no-empty-blocks',
        'filenames'
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:promise/recommended',
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
    rules: {}
};