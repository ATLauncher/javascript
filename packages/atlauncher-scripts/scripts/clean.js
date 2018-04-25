const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');

const utils = require('../utils');

const baseThingsToClean = ['coverage/', 'dist/', 'lerna-debug.log', 'yarn-error.log'];

const lockFilesToClean = ['package-lock.json', 'yarn.lock'];

const nodeModulesToClean = ['node_modules/'];

const args = process.argv.slice(2);
let dryRun = false;
let lockFiles = false;
let nodeModules = false;

if (args.length) {
    args.forEach((arg) => {
        if (arg === '--dry-run') {
            console.info(chalk`{black.bgWhite Doing a dry run. No changes will be made.\n}`);
            dryRun = true;
        }

        if (arg === '--lock-files') {
            lockFiles = true;
        }

        if (arg === '--node-modules') {
            nodeModules = true;
        }
    });
}

const projectPaths = [utils.getProjectPath()].concat(utils.getExplicitProjectPaths());

const extraToClean = utils.getConfigFromPackageJson('extraToClean', []);

const toClean = Array.prototype.concat(
    baseThingsToClean,
    lockFiles && lockFilesToClean,
    nodeModules && nodeModulesToClean,
    extraToClean,
);

projectPaths.forEach((projectPath) => {
    toClean.forEach((thePathToClean) => {
        const pathToClean = path.join(projectPath, thePathToClean);

        console.info(chalk`{white.bgRed Deleting} {black.bgWhite ${pathToClean}}`);

        if (!dryRun) {
            rimraf.sync(pathToClean);
        }
    });
});
