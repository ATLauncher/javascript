'use strict';

module.exports = function() {
    return {
        presets: [
            require('babel-preset-es2015'),
            require('babel-preset-stage-0'),
            require('babel-preset-react')
        ],
        plugins: [
            require('babel-plugin-transform-regenerator')
        ]
    };
};