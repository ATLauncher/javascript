module.exports = {
    rules: {
        // require returns to be used for callbacks outside the main flow
        'callback-return': 'error',

        // make sure all callbacks check for `err`
        'handle-callback-err': 'error',

        // don't allow using `new` with a `require` statement
        'no-new-require': 'error',

        // don't allow string concatenation of paths
        'no-path-concat': 'error'
    }
};
