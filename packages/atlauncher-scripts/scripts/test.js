const utils = require('../utils');
const colors = require('colors/safe');

// do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

// makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
    throw err;
});

(() => {
    const args = process.argv.slice(2);
    let watch = false;
    let debug = false;
    let coverage = false;
    let noConcurrency = false;

    if (args.length) {
        args.forEach((arg) => {
            if (arg === '--watch') {
                watch = true;
            }

            if (arg === '--coverage') {
                coverage = true;
            }

            if (arg === '--debug') {
                debug = true;
            }

            if (arg === '--noConcurrency') {
                noConcurrency = true;
            }
        });
    }

    const processArguments = [];

    const command = [utils.getNodeModulesBinPath('jest'), '--config', utils.getRootFile('.jestrc')];

    if (watch) {
        command.push('--watch');
    }

    if (debug) {
        command.push('--debug');
    }

    if (coverage) {
        command.push('--coverage');
    }

    if (noConcurrency) {
        command.push('--runInBand');
    }

    processArguments.push(command);

    if (!processArguments.length) {
        console.error(colors.red('Error processing input. Please check your arguments and try again.'));

        return;
    }

    utils.spawnSyncProcess(processArguments);
})();
