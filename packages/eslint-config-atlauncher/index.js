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
    './rules/plugin-import',
    './rules/plugin-jsx-a11y',
    './rules/plugin-new-with-error',
    './rules/plugin-no-loops',
    './rules/plugin-promise',
    './rules/plugin-react',
].map(require.resolve);

module.exports = {
    plugins: [
        '@atlauncher/eslint-plugin-atlauncher',
        'eslint-comments',
        'filenames',
        'import',
        'jsx-a11y',
        'new-with-error',
        'no-loops',
        'promise',
        'react',
    ],
    extends: rules,
    env: {
        node: true,
        es6: true,
        browser: true,
        jest: true,
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
