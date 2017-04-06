/* eslint-disable import/no-commonjs */

module.exports = {
    rules: {
        // when using `.then` on a promise, a `.catch` must always be included
        'promise/catch-or-return': 'error',

        // require all `.then` blocks to return a value rathen than using `Promise.resolve` or `Promise.reject`
        'promise/no-return-wrap': 'error',

        // requires all promises to use paramater names of `resolve` and `reject`
        'promise/param-names': 'error',

        // require all `.then` blocks to return a value or throw an error
        'promise/always-return': 'error',

        // avoid nesting promises
        'promise/no-nesting': 'error',

        // prefer using await to `.then`
        'promise/prefer-await-to-then': 'error'
    }
};