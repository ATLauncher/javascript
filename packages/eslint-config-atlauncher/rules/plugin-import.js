module.exports = {
    rules: {
        // ensure imports resolve to a file or package
        'import/no-unresolved': 'error',

        // ensure named imports exist
        'import/named': 'error',

        // ensure a default export is given when importing from a file that exports as default
        'import/default': 'error',

        // ensure imported properties are exported
        'import/namespace': 'error',

        // don't allow importing from absolute paths
        'import/no-absolute-path': 'error',

        // don't allow invalid exports
        'import/export': 'error',

        // warn when importing deprecated
        'import/no-deprecated': 'warn',

        // don't allow importing packages when not specified in package.json
        'import/no-extraneous-dependencies': 'error',

        // don't allow importing on `var` or `let`
        'import/no-mutable-exports': 'error',

        // don't allow unambiguous imports
        'import/unambiguous': 'warn',

        // ensure no amd modules
        'import/no-amd': 'error',

        // make sure all imports appear first in files
        'import/first': ['error', {
            'absolute-first': true,
        }],

        // don't allow imports from the same modules
        'import/no-duplicates': 'error',

        // don't use the `.js` extension in the import path for local files
        'import/extensions': ['error', 'always', {
            js: 'never',
        }],

        // make sure there is one new line after imports
        'import/newline-after-import': ['error', {
            count: 1,
        }],
    },
};
