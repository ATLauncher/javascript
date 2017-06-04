module.exports = {
    rules: {
        // if a rule is disabled, it needs to be re enabled
        'eslint-comments/disable-enable-pair': 'error',

        // don't allow duplicate disable rules
        'eslint-comments/no-duplicate-disable': 'error',

        // don't allow disabling all rules
        'eslint-comments/no-unlimited-disable': 'error',

        // don't allow disabling a rule that isn't triggered
        'eslint-comments/no-unused-disable': 'error',

        // don't allow enabling a rule that hasn't been disabled
        'eslint-comments/no-unused-enable': 'error',

        // warn when using eslint-enable or eslint-disable rules
        'eslint-comments/no-use': ['warn', {
            'allow': [
                'eslint',
                'eslint-env',
                'exported',
                'global',
                'globals'
            ]
        }]
    }
};
