const path = require('path');
const rimraf = require('rimraf');
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

const baseThingsToClean = ['dist'];

(() => {
    const args = process.argv.slice(2);
    let dryRun = false;

    if (args.length) {
        args.forEach(arg => {
            if (arg === '--dry-run') {
                console.info(colors.green('Doing a dry run. No changes will be made.'));
                dryRun = true;
            }
        });
    }

    const projectBasePath = utils.getProjectBasePath();

    const extraToClean = utils.getConfigFromPackageJson('extraToClean', []);

    const toClean = Array.prototype.concat(baseThingsToClean, extraToClean);

    toClean.forEach(thePathToClean => {
        const pathToClean = path.join(projectBasePath, thePathToClean);

        console.info(colors.green(`Deleting ${pathToClean}`));

        if (!dryRun) {
            rimraf.sync(pathToClean);
        }
    });
})();
