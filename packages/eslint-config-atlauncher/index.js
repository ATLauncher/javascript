/* eslint-disable filenames/no-index */
/* eslint-disable import/no-commonjs */

const configs = [
    './configs/electron',
    './configs/react'
].map(require.resolve);

const rules = [
    './rules/base',
    './rules/plugin-filenames',
    './rules/plugin-import',
    './rules/plugin-jsx-a11y',
    './rules/plugin-promise',
    './rules/plugin-react'
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
        'plugin:jsx-a11y/recommended',
        'plugin:promise/recommended',
        ...rules
    ],
    configs,
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
    }
};