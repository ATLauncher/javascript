/* eslint-disable import/no-commonjs */

module.exports = {
    rules: {
        // static analysis
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'error',
        'import/no-absolute-path': 'error',

        // helpful warnings
        'import/export': 'error',
        'import/no-named-as-default': 'warn',
        'import/no-named-as-default-member': 'warn',
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',

        // module systems
        'import/unambiguous': 'warn',
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',

        // style guide
        'import/first': ['error', {'absolute-first': true}],
        'import/no-duplicates': 'error',
        'import/extensions': ['error', 'always', {'js': 'never'}],
        'import/order': ['error', {
            'newlines-between': 'always',
            'groups': [
                ['external', 'builtin'],
                ['index', 'sibling', 'parent', 'internal']
            ]
        }],
        'import/newline-after-import': ["error", {'count': 1}]
    }
};