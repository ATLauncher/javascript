const utils = require('../utils');
const colors = require('colors/safe');

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
    throw err;
});

(() => {
    const args = process.argv.slice(2);
    let toLint = 'all';
    let debug = false;
    let watch = false;
    const workingDirectory = utils.getProjectBasePath();

    if (args.length) {
        args.forEach(arg => {
            if (arg === 'js') {
                toLint = 'js';
            }

            if (arg === '--watch') {
                watch = true;
            }

            if (arg === '--debug') {
                debug = true;
            }
        });
    }

    const processArguments = [];

    if (!watch && (toLint === 'js' || toLint === 'all')) {
        const command = [
            utils.getNodeModulesBinPath('eslint'),
            '--config',
            utils.getRootFile('.eslintrc'),
            '--ignore-path',
            utils.getRootFile('.eslintignore'),
        ];

        if (debug) {
            command.push('--debug');
        }

        command.push(utils.getSourceCodeGlob('js'));

        processArguments.push(command);
    }

    if (watch && toLint === 'js') {
        processArguments.push([
            utils.getNodeModulesBinPath('chokidar'),
            utils.getSourceCodeGlob('js'),
            '--initial',
            '-c npm run lint:js',
        ]);
    }

    if (!processArguments.length) {
        console.error(
            colors.red('Error processing input. Please check your arguments and try again.'),
        );
        return;
    }

    utils.spawnSyncProcess(processArguments, workingDirectory);
})();
