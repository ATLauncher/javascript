const fs = require('fs');
const path = require('path');
const spawn = require('cross-spawn');
const colors = require('colors/safe');
const isWindows = require('is-windows');

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

function getATLauncherScriptsBasePath() {
    return path.resolve(__dirname);
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

function spawnSyncProcess(command = 'node', processes = [], workingDirectory) {
    if (typeof processes !== 'object') {
        return;
    }

    let processesToRun = processes;

    if (typeof processes[0] !== 'object') {
        processesToRun = [processes];
    }

    processesToRun.forEach((processToRun) => {
        console.log(colors.green(`Running '${command} ${processToRun.join(' ')}'\n`));

        const result = spawn.sync(command, processToRun, {
            stdio: 'inherit',
            cwd: workingDirectory,
        });

        if (result.signal) {
            process.exit(1);
        }

        if (result.status !== 0) {
            process.exit(result.status);
        }
    });
}

module.exports = {
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
