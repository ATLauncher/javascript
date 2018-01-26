const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const isWindows = require('is-windows');

/**
 * This gets a path to the project (where atlauncher-scripts was called from).
 *
 * @param {string} [pathString=''] the path to get, otherwise the root
 * @returns {string}
 */
function getProjectPath(pathString = '') {
    return path.resolve(process.cwd(), pathString);
}

/**
 * This reads in the projects package.json (if it exists) and returns it as an object.
 *
 * @returns {Object}
 */
function getProjectPackageJson() {
    const packageJsonPath = getProjectPath('package.json');

    if (!fs.existsSync(packageJsonPath)) {
        return {};
    }

    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
}

/**
 * This gets the specified value from the projects package.json config option if it exists.
 *
 * If it doesn't exist, the optional defaultValue will be returned.
 *
 * @param {string} name
 * @param {any} [defaultValue=null]
 * @returns {any}
 */
function getConfigFromPackageJson(name, defaultValue = null) {
    const packageJson = getProjectPackageJson();

    if (typeof packageJson.config === 'undefined') {
        return defaultValue;
    }

    if (typeof packageJson.config.atlauncher === 'undefined') {
        return defaultValue;
    }

    if (typeof packageJson.config.atlauncher[name] === 'undefined') {
        return defaultValue;
    }

    return packageJson.config.atlauncher[name];
}

/**
 * This gets the base path for the atlauncher-scripts directory,
 *
 * @param {string} [pathString='']
 * @returns {string}
 */
function getATLauncherScriptsBasePath(pathString = '') {
    return path.resolve(__dirname, '../', pathString);
}

/**
 * This gets the list of scripts available to be executed by atlauncher-scripts.
 *
 * @returns {string[]}
 */
function getScripts() {
    const scripts = fs.readdirSync(getATLauncherScriptsBasePath('scripts'));

    // remove the file extension and turn all '-' to ':' so 'lint-js' is run by using 'lint:js'
    return scripts.map((script) => script.replace('.js', '').replace('-', ':'));
}

/**
 * This gets a path from the node_modules folder.
 *
 * It first checks the projects node_modules folder, and then if that doesn't exist will check the atlauncher-scripts
 * node_modules folder. Finally if that doesn't exist it will assume it's being run from lerna and use lerna's hoisted
 * node_modules folder if it exists, else null.
 *
 * @param {string} filename
 * @returns {string|null}
 */
function getNodeModulesPath(filename) {
    const projectRootFile = getProjectPath(`node_modules/${filename}`);

    if (fs.existsSync(projectRootFile)) {
        return projectRootFile;
    }

    const atlauncherScriptsFile = getATLauncherScriptsBasePath(`node_modules/${filename}`);

    if (fs.existsSync(atlauncherScriptsFile)) {
        return atlauncherScriptsFile;
    }

    const lernaRootBasePath = getATLauncherScriptsBasePath(`../../../node_modules/${filename}`);

    if (fs.existsSync(lernaRootBasePath)) {
        return lernaRootBasePath;
    }

    return null;
}

/**
 * This will get the path to a file in the .bin directory of node_modules.
 *
 * If on Windows it will return the path to the `.cmd` version if it exists.
 *
 * @param {string} packageName
 * @returns {string}
 */
function getNodeModulesBinPath(packageName) {
    if (isWindows()) {
        const cmdBin = getNodeModulesPath(`.bin/${packageName}.cmd`);

        if (fs.existsSync(cmdBin)) {
            return cmdBin;
        }
    }

    return getNodeModulesPath(`.bin/${packageName}`);
}

/**
 * This will get the path to a config file, either in the projects base directory, or provided as a default by
 * atlauncher-scripts.
 *
 * @param {string} filename
 * @returns {string|null}
 */
function getConfigFile(filename) {
    const projectRootFile = getProjectPath(filename);

    if (fs.existsSync(projectRootFile)) {
        return projectRootFile;
    }

    const defaultRootFile = getATLauncherScriptsBasePath(`config/${filename}`);

    if (fs.existsSync(defaultRootFile)) {
        return defaultRootFile;
    }

    return null;
}

/**
 * This will spawn a syncronous process.
 *
 * @param {string} [command='node']
 * @param {string[]} [processes=[]]
 * @param {string} [workingDirectory=getProjectPath()]
 */
function spawnSyncProcess(command = 'node', processes = [], workingDirectory = getProjectPath()) {
    if (typeof processes !== 'object') {
        return;
    }

    let processesToRun = processes;

    if (typeof processes[0] !== 'object') {
        processesToRun = [processes];
    }

    processesToRun.forEach((processToRun) => {
        const commandArguments = processToRun.filter((p) => p);

        console.log(chalk`{black.bgWhite Running '${command} ${commandArguments.join(' ')}'}\n`);

        const result = spawn.sync(command, processToRun, {
            stdio: 'inherit',
            cwd: workingDirectory,
        });

        if (result.signal) {
            if (result.signal === 'SIGKILL') {
                console.log(
                    chalk.white.bgRed(
                        'Commit Linting failed because the process exited too early. ' +
                        'This probably means the system ran out of memory or someone called ' +
                        '`kill -9` on the process.'
                    )
                );
            } else if (result.signal === 'SIGTERM') {
                console.log(
                    chalk.white.bgRed(
                        'Commit Linting failed because the process exited too early. ' +
                        'Someone might have called `kill` or `killall`, or the system could ' +
                        'be shutting down.'
                    )
                );
            }

            process.exit(1);
        }

        process.exit(result.status);
    });
}

// eslint-disable-next-line immutable/no-mutation
module.exports = {
    getScripts,
    getConfigFile,
    getProjectPath,
    spawnSyncProcess,
    getNodeModulesPath,
    getNodeModulesBinPath,
    getConfigFromPackageJson,
};
