module.exports = {
    rules: {
        // warn when not using jsdoc unless function name matches one in the ignore list
        'atlauncher/require-jsdoc': ['warn', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: true,
            },
            ignore: [
                'render',
            ],
        }],
    },
};
