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
    const workingDirectory = utils.getProjectBasePath();

    const stringArgs = args.join(' ');

    const processArguments = [];

    processArguments.push([utils.getNodeModulesBinPath('babel-node'), utils.getProjectPath(stringArgs)]);

    if (!processArguments.length) {
        console.error(colors.red('Error processing input. Please check your arguments and try again.'));

        return;
    }

    utils.spawnSyncProcess(processArguments, workingDirectory);
})();
