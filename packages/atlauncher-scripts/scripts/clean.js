const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');

const utils = require('../utils');

const baseThingsToClean = ['dist'];

const args = process.argv.slice(2);
let dryRun = false;

if (args.length) {
    args.forEach((arg) => {
        if (arg === '--dry-run') {
            console.info(chalk`{black.bgWhite Doing a dry run. No changes will be made.\n}`);
            dryRun = true;
        }
    });
}

const projectBasePath = utils.getProjectPath();

const extraToClean = utils.getConfigFromPackageJson('extraToClean', []);

const toClean = Array.prototype.concat(baseThingsToClean, extraToClean);

toClean.forEach((thePathToClean) => {
    const pathToClean = path.join(projectBasePath, thePathToClean);

    console.info(chalk`{white.bgRed Deleting} {black.bgWhite ${pathToClean}}`);

    if (!dryRun) {
        rimraf.sync(pathToClean);
    }
});
