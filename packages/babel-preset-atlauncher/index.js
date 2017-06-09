'use strict';

module.exports = function() {
    return {
        presets: [
            [require('babel-preset-env'), {
                targets: {
                    node: 8,
                },
            }],
            require('babel-preset-react'),
        ],
        plugins: [
            require('babel-plugin-transform-class-properties'),
            require('babel-plugin-transform-export-extensions'),
            require('babel-plugin-transform-function-bind'),
            require('babel-plugin-transform-object-rest-spread'),
            require('babel-plugin-transform-runtime'),
            require('babel-plugin-transform-regenerator'),
            require('babel-plugin-transform-react-remove-prop-types').default,
        ],
    };
};
