const rules = [
    // eslint rules
    './rules/best-practices',
    './rules/ecmascript-6',
    './rules/nodejs',
    './rules/possible-errors',
    './rules/stylistic-issues',
    './rules/variables',

    // eslint plugins
    './rules/plugin-atlauncher',
    './rules/plugin-eslint-comments',
    './rules/plugin-immutable',
    './rules/plugin-import',
    './rules/plugin-jsx-a11y',
    './rules/plugin-promise',
    './rules/plugin-react',
].map(require.resolve);

module.exports = {
    plugins: [
        '@atlauncher/atlauncher',
        'eslint-comments',
        'filenames',
        'immutable',
        'import',
        'jsx-a11y',
        'no-empty-blocks',
        'promise',
        'react',
    ],
    extends: rules,
    env: {
        node: true,
        es6: true,
        browser: true,
        mocha: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
    },
};
