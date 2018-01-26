const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const isWindows = require('is-windows');

function getScripts() {
    const scripts = fs.readdirSync(getATLauncherScriptsBasePath('scripts'));

    // remove the file extension and turn all '-' to ':' so 'lint-js' is run by using 'lint:js'
    return scripts.map((script) => script.replace('.js', '').replace('-', ':'));
}

function getProjectBasePath() {
    return path.resolve(process.cwd());
}

function getProjectPackageJson() {
    const packageJsonPath = getProjectPath('package.json');

    if (!fs.existsSync(packageJsonPath)) {
        return {};
    }

    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
}

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

function getATLauncherScriptsBasePath(pathString = '/') {
    return path.resolve(__dirname, '../', pathString);
}

function getSourceCodePath() {
    return getProjectPath('src');
}

function getProjectPath(pathString = '/') {
    return path.resolve(getProjectBasePath(), pathString);
}

function getNodeModulesPath(filename) {
    const projectBasePath = getProjectBasePath();

    const projectRootFile = `${projectBasePath}/node_modules/${filename}`;

    if (fs.existsSync(projectRootFile)) {
        return projectRootFile;
    }

    const atlauncherScriptsBasePath = getATLauncherScriptsBasePath();
    const atlauncherScriptsFile = `${atlauncherScriptsBasePath}/node_modules/${filename}`;

    if (fs.existsSync(atlauncherScriptsFile)) {
        return atlauncherScriptsFile;
    }

    const lernaRootBasePath = path.resolve(atlauncherScriptsBasePath, '../../../');

    return `${lernaRootBasePath}/node_modules/${filename}`;
}

function getNodeModulesBinPath(packageName) {
    if (isWindows()) {
        const cmdBin = getNodeModulesPath(`.bin/${packageName}.cmd`);

        if (fs.existsSync(cmdBin)) {
            return cmdBin;
        }
    }

    return getNodeModulesPath(`.bin/${packageName}`);
}

function getRootFile(filename) {
    const projectBasePath = getProjectBasePath();

    const projectRootFile = `${projectBasePath}/${filename}`;

    if (fs.existsSync(projectRootFile)) {
        return projectRootFile;
    }

    const atlauncherScriptsBasePath = getATLauncherScriptsBasePath();

    const defaultRootFile = `${atlauncherScriptsBasePath}/config/${filename}`;

    return defaultRootFile;
}

function getRootGlob(type = 'js') {
    let sourceCodePath = getProjectBasePath();

    if (sourceCodePath.substr(-1) === '/') {
        sourceCodePath = sourceCodePath.substr(0, sourceCodePath.length - 1);
    }

    if (type === 'css') {
        return `${sourceCodePath}/*.{css,less,scss}`;
    }

    return `${sourceCodePath}/*.${type}`;
}

function getSourceCodeGlob(type = 'js') {
    let sourceCodePath = getSourceCodePath();

    if (sourceCodePath.substr(-1) === '/') {
        sourceCodePath = sourceCodePath.substr(0, sourceCodePath.length - 1);
    }

    if (type === 'js') {
        return `${sourceCodePath}/**/*.js`;
    } else if (type === 'css') {
        return `${sourceCodePath}/**/*.{css,less,scss}`;
    }

    return `${sourceCodePath}/**/*`;
}

function spawnSyncProcess(command = 'node', processes = [], workingDirectory = getProjectBasePath()) {
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

module.exports = {
    getScripts,
    getRootFile,
    getProjectPath,
    spawnSyncProcess,
    getSourceCodeGlob,
    getSourceCodePath,
    getNodeModulesPath,
    getProjectBasePath,
    getNodeModulesBinPath,
    getConfigFromPackageJson,
};
