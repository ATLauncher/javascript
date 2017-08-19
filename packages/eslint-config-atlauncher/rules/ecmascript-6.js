module.exports = {
    rules: {
        // always require braces in arrow functions
        'arrow-body-style': ['error', 'always'],

        // always require the start of an arrow function to be wrapped in parenthesis
        'arrow-parens': ['error', 'always'],

        // require spaces before and after the `=>` in an arrow function
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],

        // require calling super when defining a constructor in a sub class
        'constructor-super': 'error',

        // require generators to be defined as `function*()`
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: false,
            },
        ],

        // don't allow reassigning class definitions
        'no-class-assign': 'error',

        // don't allow confusing arrow functions
        'no-confusing-arrow': 'error',

        // don't allow reassigning `const` variables
        'no-const-assign': 'error',

        // don't allow defining the same class members
        'no-dupe-class-members': 'error',

        // don't allow importing the same package multiple times
        'no-duplicate-imports': 'error',

        // don't allowing calling `new` on `Symbol`
        'no-new-symbol': 'error',

        // don't allow calling `this` in constructors before `super`
        'no-this-before-super': 'error',

        // don't allow useless computed keys in objects
        'no-useless-computed-key': 'error',

        // don't allow useless constructors
        'no-useless-constructor': 'error',

        // don't allow renaming imports or exports to the same name
        'no-useless-rename': 'error',

        // don't allow the use of `var`
        'no-var': 'error',

        // suggest using `const` over `let`
        'prefer-const': 'error',

        // use spread instead of joining objects
        'prefer-spread': 'error',

        // prefer template literals instead of string concatenation
        'prefer-template': 'error',

        // require `yield` statement in a generator function
        'require-yield': 'error',

        // don't put a space before `...` in spread operator
        'rest-spread-spacing': ['error', 'never'],

        // require symbol descriptions
        'symbol-description': 'error',

        // don't use spaces in template literals
        'template-curly-spacing': ['error', 'never'],

        // require space after, but not before, yield
        'yield-star-spacing': ['error', 'after'],
    },
};
