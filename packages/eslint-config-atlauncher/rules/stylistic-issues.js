module.exports = {
    rules: {
        // don't put spaces inside arrays
        'array-bracket-spacing': ['error', 'never'],

        // don't allow spacing in single line functions, `function a() {return true}`
        'block-spacing': ['error', 'never'],

        // set the styling of braces and don't allow single lines
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false
        }],

        // require camelCase
        'camelcase': ['error', {
            properties: 'always'
        }],

        // all comments should start with a lowercase letter unless in a block comment
        'capitalized-comments': ['error', 'never', {
            line: {
                ignoreInlineComments: true
            },
            block: {
                ignoreInlineComments: true,
                ignorePattern: '.'
            }
        }],

        // don't allow dangling commas
        'comma-dangle': ['error', 'never'],

        // require spaces after commas
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],

        // commas should come last rather than on the new line
        'comma-style': ['error', 'last'],

        // never allow spacing between properties
        'computed-property-spacing': ['error', 'never'],

        // require any references to `this` to be called `self`
        'consistent-this': ['error', 'self'],

        // ensure there is a new line at the end of files
        'eol-last': ['error', 'always'],

        // don't allow spaces between function names and `()`
        'func-call-spacing': ['error', 'never'],

        // require 4 spaces for indentation
        'indent': ['error', 4, {
            SwitchCase: 4
        }],

        // require double quotes for JSX attributes
        'jsx-quotes': ['error', 'prefer-double'],

        // require space after colon in objects and not before
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],

        // ensure consistency around spacing with keywords
        'keyword-spacing': ['error', {
            before: true,
            after: true
        }],

        // ensure unix line endings are used
        'linebreak-style': ['error', 'unix'],

        // ensure there are new lines before comments outside of objects, blocks and arrays but not after it
        'lines-around-comment': ['error', {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowBlockEnd: false,
            allowObjectStart: true,
            allowObjectEnd: false,
            allowArrayStart: true,
            allowArrayEnd: false
        }],

        // ensure there are newlines around directives
        'lines-around-directive': ['error', 'always'],

        // warn when nesting more than 3 blocks
        'max-depth': ['warn', {
            max: 3
        }],

        // ensure mx line length of 120 characters
        'max-len': ['error', {
            code: 120,
            ignoreComments: false,
            ignoreTrailingComments: false,
            ignoreUrls: false,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
            ignoreRegExpLiterals: false
        }],

        // don't allow nesting of callbacks more than 3 layers
        'max-nested-callbacks': ['warn', {
            max: 3
        }],

        // require constructors to have first letter capitalised unless the constructor ends in '.deafult'
        'new-cap': ['error', {
            newIsCapExceptionPattern: '.default$'
        }],

        // always require parenthesis with new keyword even without parameters
        'new-parens': 'error',

        // require a new line before return statements unless it's alone in a block
        'newline-before-return': 'error',

        // warn when not using a new line for each call in a chain over 4 deep
        'newline-per-chained-call': ['warn', {
            ignoreChainWithDepth: 4
        }],

        // don't allow creating an array with `new Array` unless only has one parameter for manually sized array
        'no-array-constructor': 'error',

        // warn when using bitwise operations
        'no-bitwise': 'warn',

        // don't allow single if statements inside an else statement
        'no-lonely-if': 'error',

        // don't allow a mix of spaces and tabs
        'no-mixed-spaces-and-tabs': 'error',

        // don't allow multi chain assignments like `a = b = c`
        'no-multi-assign': 'error',

        // don't allow more than 1 empty line in a row
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 1
        }],

        // don't allow nested ternary operators
        'no-nested-ternary': 'error',

        // don't allow using `new Object`
        'no-new-object': 'error',

        // don't allow tabs at all
        'no-tabs': 'error',

        // don't allow trailing spaces at end of lines
        'no-trailing-spaces': 'error',

        // don't use ternary operators when a simpler solution exists
        'no-unneeded-ternary': 'error',

        // don't allow whitespace before properties
        'no-whitespace-before-property': 'error',

        // require new lines for each property in object
        'object-property-newline': ['error', {
            allowMultiplePropertiesPerLine: false
        }],

        // only allow one variable to be declared per `var`, `let` or `const`
        'one-var': ['error', 'never'],

        // require line breaks in multiline operators to be after the operator
        'operator-linebreak': ['error', 'after'],

        // don't pad blocks with new line before and after
        'padded-blocks': ['error', 'never'],

        // only allow quotes in property names when needed
        'quote-props': ['error', 'as-needed'],

        // only allow single quotes unless to avoid escaping
        'quotes': ['error', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],

        // require semi colons
        'semi': 'error',

        // require space after certain blocks
        'space-before-blocks': ['error', 'always'],

        // don't allow a space before the parenthesis in functions so not `function ()` but `function()`
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never'
        }],

        // don't allow spaces in parenthesis
        'space-in-parens': ['error', 'never'],

        // require space between csome operators so `a = 3` rather than `a=3`
        'space-infix-ops': 'error',

        // require space between some operators so `a ? b : c` rather than `a?b:c`
        'space-unary-ops': 'error',

        // requires a space before comments
        'spaced-comment': 'error'
    }
};
