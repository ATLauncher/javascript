module.exports = {
    rules: {
        // ensure that all Array methods that require a return in the callback function have one
        'array-callback-return': 'error',

        // if a class method doesn't use this, it should be made static
        'class-methods-use-this': 'error',

        // warn if there are more than 20 different branches in a fynction
        'complexity': ['warn', 20],

        // ensure functions always return the same kind of value and not undefined in some places
        'consistent-return': 'error',

        // require all blocks to use curly braces
        'curly': 'error',

        // require all switch statements have a default case
        'default-case': 'error',

        // require multi line object calls put the dot as the first character in the new line
        'dot-location': ['error', 'property'],

        // require using dot notation for objects where possible
        'dot-notation': 'error',

        // require using `===` and `!==` over `==` and `!=`
        'eqeqeq': ['error', 'always'],

        // don't allow `alert`, `confirm` or `prompt` calls
        'no-alert': 'error',

        // don't allow use of `caller` or `callee`
        'no-caller': 'error',

        // require braces around case statements when using `let`, `const` or defining a function
        'no-case-declarations': 'error',

        // when returning in a `if` statement, don't return in an else block, do it outside
        'no-else-return': 'error',

        // don't allow empty functions unless an arrow function
        'no-empty-function': ['error', {allow: ['arrowFunctions']}],

        // don't allow empty destructuring
        'no-empty-pattern': 'error',

        // don't allow `== null` and `!= null`, requiring `=== null` and `!== null`
        'no-eq-null': 'error',

        // don't allow `eval` calls
        'no-eval': 'error',

        // don't allow extending the prototype of native classes
        'no-extend-native': 'error',

        // don't bind when we don't need to
        'no-extra-bind': 'error',

        // don't allow fallthrough in switch statements
        'no-fallthrough': 'error',

        // don't allow floating decimals, so `.5` should be `0.5` and `5.` should be `5.0`
        'no-floating-decimal': 'error',

        // don't allow re assigning global objects
        'no-global-assign': 'error',

        // don't allow setting variables or functions in top level scope outside of modules
        'no-implicit-globals': 'error',

        // don't allow eval through `setTimeout`, `setInterval` or `execScript`
        'no-implied-eval': 'error',

        // don't allow the use of this outside classes and class like structures
        'no-invalid-this': 'error',

        // don't allow use of `__iterator__`
        'no-iterator': 'error',

        // disallow use of labels in loops
        'no-labels': 'error',

        // don't allow stand alone blocks
        'no-lone-blocks': 'error',

        // don't allow creating functions within loops
        'no-loop-func': 'error',

        // don't allow multiple spaces
        'no-multi-spaces': 'error',

        // don't allow creation of multi line strings with a `\` before a newline
        'no-multi-str': 'error',

        // don't allow using `new` without storing the result
        'no-new': 'error',

        // don't allow creating a function with `new Function`
        'no-new-func': 'error',

        // don't allow the `new` keyword with `String`, `Number and `Boolean`
        'no-new-wrappers': 'error',

        // don't allow octals
        'no-octal': 'error',

        // don't allow octal escape characters, only hex or unicode
        'no-octal-escape': 'error',

        // don't allow reassigning function parameters
        'no-param-reassign': 'error',

        // don't allow use of `__proto__`
        'no-proto': 'error',

        // don't allow redeclaration of variables with var, so `var a = 1; var a = 2` should be `var a = 1; a = 2`
        'no-redeclare': 'error',

        // don't allow returning an assignment `return var = 1 + 2`
        'no-return-assign': 'error',

        // don't allow self assigning `[a, b] = [a, b]`
        'no-self-assign': 'error',

        // don't allow comparison against self `if (a === a)`
        'no-self-compare': 'error',

        // only allow throwing a new Error
        'no-throw-literal': 'error',

        // don't allow loops which don't modify the conditional
        'no-unmodified-loop-condition': 'error',

        // don't allow unused expressions
        'no-unused-expressions': 'error',

        // don't allow using `call` or `apply` without an extra this parameter
        'no-useless-call': 'error',

        // don't allow useless concatenation
        'no-useless-concat': 'error',

        // don't allow escaping when not needed
        'no-useless-escape': 'error',

        // don't allow redundant return calls
        'no-useless-return': 'error',

        // don't allow using `void`
        'no-void': 'error',

        // don't allow `with` calls
        'no-with': 'error',

        // require using errors in rejections for Promises
        'prefer-promise-reject-errors': 'error',

        // require providing a radix for every `parseInt` call
        'radix': 'error',

        // don't allow using async functions that have no await
        'require-await': 'error',

        // require `iife` to be wrapped in brackets
        'wrap-iife': 'error',

        // when comparing variables with non variables, the variable must be first
        'yoda': 'error'
    }
};
