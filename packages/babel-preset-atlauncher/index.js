'use strict';

module.exports = function() {
    var environment = process.env.BABEL_ENV || process.env.NODE_ENV;
    var isDevelopment = environment === 'development';
    var isProduction = environment === 'production';
    var isTest = environment === 'test';

    if (!isDevelopment && !isProduction && !isTest) {
        throw new Error(
            '@atlauncher/babel-present-atlauncher detected that the BABEL_ENV/NODE_ENV value was not set to a valid ' +
                'value. Please set it to development, production or test and try building again.',
        );
    }

    // the environment we're building for
    var finalEnvironment = process.env.FINAL_ENVIRONMENT || 'node';
    var buildingForNode = finalEnvironment === 'node';
    var buildingForBrowser = finalEnvironment === 'browser';

    if (!buildingForNode && !buildingForBrowser) {
        throw new Error(
            '@atlauncher/babel-present-atlauncher detected that the FINAL_ENVIRONMENT value was not set to node or ' +
                'browser. Please set it to one of those options and then try building again.',
        );
    }

    var envConfigNode = {
        targets: {
            node: 'current',
        },
    };

    var envConfigBrowser = {
        targets: {
            browsers: [
                'last 3 Chrome versions',
                'last 3 Firefox versions',
                'last 3 Edge versions',
                'last 3 Safari versions',
                'last 3 ChromeAndroid versions',
                'last 3 iOS versions',
                'last 3 Samsung versions',
            ],
        },
    };

    var fs = require('fs');
    var path = require('path');

    var resolvePath = path.join(process.cwd(), 'resolve.json');
    var useModuleResolver = fs.existsSync(resolvePath);
    var moduleResolverConfig = useModuleResolver && fs.readFileSync(resolvePath);

    return {
        presets: [
            // if in test or development environment then we're building for Node
            (isTest || isDevelopment) && [require('babel-preset-env'), envConfigNode],

            // if production then we need to build based on what the final environment is
            isProduction && [
                require('babel-preset-env'),
                buildingForBrowser ? envConfigBrowser : envConfigNode,
            ],

            // react preset
            require('babel-preset-react'),
        ].filter(Boolean),

        plugins: [
            // allows classes to have properties
            require('babel-plugin-transform-class-properties'),

            // transforms rest/spread operator `...object`
            [require('babel-plugin-transform-object-rest-spread'), { useBuiltIns: true }],

            // for async/await
            [require('babel-plugin-transform-runtime'), { helpers: false, polyfill: false }],

            // transform generator functions
            !isTest && [require('babel-plugin-transform-regenerator'), { async: false }],

            // transform dynamic imports to require in test
            isTest && require('babel-plugin-transform-dynamic-import').default,

            // remove propTypes and their imports when in production
            isProduction && [
                require('babel-plugin-transform-react-remove-prop-types'),
                { removeImport: true },
            ],

            // for react
            [require('babel-plugin-transform-react-jsx'), { useBuiltIns: true }],

            // use module resolver if there is a `resolve.json` file in the project root
            useModuleResolver && [require('babel-plugin-module-resolver'), moduleResolverConfig],
        ].filter(Boolean),
    };
};
