module.exports = {
    rules: {
        // don't allow the use of await in loops
        'no-await-in-loop': 'error',

        // don't allow equality checks on `-0`
        'no-compare-neg-zero': 'error',

        // don't allow conditional statements on assignments like `if (a = 'test') {`
        'no-cond-assign': 'error',

        // don't allow the use of `console` methods
        'no-console': 'error',

        // don't allow infinite loops
        'no-constant-condition': 'error',

        // don't allow the use of first 30 ascii values in regex
        'no-control-regex': 'error',

        // don't allow the use of `debugger` statements
        'no-debugger': 'error',

        // don't allow arguments with the same name
        'no-dupe-args': 'error',

        // don't allow duplicate key names in objects
        'no-dupe-keys': 'error',

        // don't allow duplicate cases in switch statements
        'no-duplicate-case': 'error',

        // don't allow empty block statements except for catch blocks
        'no-empty': ['error', {
            allowEmptyCatch: true,
        }],

        // don't allow empty character classes in regex so `^test[]$` is invalid but `^test[1-9]$` is valid
        'no-empty-character-class': 'error',

        // don't allow reassigning exceptions in catch blocks
        'no-ex-assign': 'error',

        // don't allow unnecessary casting to boolean in if statements
        'no-extra-boolean-cast': 'error',

        // don't allow extra semi colons where not necessary
        'no-extra-semi': 'error',

        // don't allow reassigning a function
        'no-func-assign': 'error',

        // don't allow nesting function decelerations within blocks or other functions
        'no-inner-declarations': 'error',

        // don't allow invalid regular expressions
        'no-invalid-regexp': 'error',

        // don't allow irregular whitespace characters
        'no-irregular-whitespace': 'error',

        // don't allow calling `Math()` and other global functions
        'no-obj-calls': 'error',

        // don't allow multiple spaces in regex strings
        'no-regex-spaces': 'error',

        // don't allow empty spots in arrays like `[1, 2,, 4]`
        'no-sparse-arrays': 'error',

        // don't allow template literals inside strings
        'no-template-curly-in-string': 'warn',

        // don't allow confusing multiline statements
        'no-unexpected-multiline': 'error',

        // don't allow unreachable code after return, break, throw or continue statements
        'no-unreachable': 'error',

        // don't allow returning values within finally blocks
        'no-unsafe-finally': 'error',

        // don't allow negation of the left had side of an operation when it seems to be incorrect
        'no-unsafe-negation': 'warn',

        // only allow the use of `isNan`
        'use-isnan': 'error',

        // ensure valid JSDoc is used
        'valid-jsdoc': ['error', {
            preferType: {
                Boolean: 'boolean',
                Number: 'number',
                object: 'object',
                String: 'string',
            },
            requireReturn: false,
            requireReturnType: true,
            requireParamDescription: false,
            requireReturnDescription: false,
        }],

        // ensure valid typeof checks are used
        'valid-typeof': 'error',
    },
};
