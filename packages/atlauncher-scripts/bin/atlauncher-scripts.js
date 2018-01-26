#!/usr/bin/env node

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const chalk = require('chalk');
const utils = require('../utils');
const spawn = require('cross-spawn');

// do this as the first thing so that any code reading it knows the right env
process.env.NODE_ENV = 'development';

const args = process.argv.slice(2);

if (!args.length) {
    console.log(chalk`{white.bgRed No arguments passed in.}`);

    process.exit(1);
}

const scripts = utils.getScripts();
const scriptIndex = args.findIndex((arg) => scripts.includes(arg));
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

if (scripts.includes(script)) {
    const result = spawn.sync(
        'node',
        nodeArgs
            .concat(require.resolve(`../scripts/${script.replace(':', '-')}`))
            .concat(args.slice(scriptIndex + 1)),
        { stdio: 'inherit' }
    );

    if (result.signal) {
        if (result.signal === 'SIGKILL') {
            console.log(
                chalk.white.bgRed(
                    'The build failed because the process exited too early. ' +
                    'This probably means the system ran out of memory or someone called ' +
                    '`kill -9` on the process.'
                )
            );
        } else if (result.signal === 'SIGTERM') {
            console.log(
                chalk.white.bgRed(
                    'The build failed because the process exited too early. ' +
                    'Someone might have called `kill` or `killall`, or the system could ' +
                    'be shutting down.'
                )
            );
        }

        process.exit(1);
    }

    process.exit(result.status);
} else {
    console.log(chalk`{white.bgRed Unknown script "${script}".}`);

    process.exit(1);
}
