const utils = require('../utils');
const colors = require('colors/safe');

// do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
    throw err;
});

(() => {
    const args = process.argv.slice(2);
    let toLint = 'js';
    let debug = false;
    let watch = false;
    let commandBinToRun = 'eslint';
    const workingDirectory = utils.getProjectBasePath();

    if (args.length) {
        args.forEach((arg) => {
            if (arg === 'js') {
                toLint = 'js';
            } else if (arg === 'md') {
                toLint = 'md';
            } else if (arg === 'pj') {
                toLint = 'pj';
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
    let command = [];

    if (toLint === 'js') {
        if (watch) {
            commandBinToRun = 'chokidar';
            command = [
                utils.getSourceCodeGlob('js'),
                '--initial',
                '-c npm run lint:js',
            ];
        } else {
            command = [
                '--config',
                utils.getRootFile('.eslintrc'),
                '--ignore-path',
                utils.getRootFile('.eslintignore'),
            ];

            if (debug) {
                command.push('--debug');
            }

            command.push(utils.getSourceCodeGlob('js'));
        }
    }

    if (toLint === 'md') {
        commandBinToRun = 'markdownlint';

        command = [
            '--config',
            utils.getRootFile('.markdownlint.json'),
            utils.getRootGlob('md'),
        ];
    }

    if (toLint === 'pj') {
        commandBinToRun = 'pjl-cli';

        command = [
            '--rules-file',
            utils.getRootFile('.npmpackagejsonlintrc'),
            utils.getRootFile('package.json'),
        ];
    }

    if (!command.length) {
        console.error(colors.red('Error processing input. Please check your arguments and try again.'));

        return;
    }

    processArguments.push(command);

    utils.spawnSyncProcess(utils.getNodeModulesBinPath(commandBinToRun), processArguments, workingDirectory);
})();
