const utils = require('../utils');

const args = process.argv.slice(2);
let debug = false;
let watch = false;

if (args.length) {
    args.forEach((arg) => {
        if (arg === '--watch') {
            watch = true;
        }

        if (arg === '--debug') {
            debug = true;
        }
    });
}

if (watch) {
    const processArguments = [utils.getProjectPath('src/**/*.js'), '--initial', '-c npm run lint:js'];

    utils.spawnSyncProcess(utils.getNodeModulesBinPath('chokidar'), processArguments);

    return;
}

const processArguments = [
    '--config',
    utils.getConfigFile('.eslintrc'),
    '--ignore-path',
    utils.getConfigFile('.eslintignore'),
    '--ignore-pattern',
    '**/node_modules/**',
    '--ignore-pattern',
    '**/coverage/**',
    debug && '--debug',
].concat(utils.getProjectPaths('**/*.js'));

utils.spawnSyncProcess(utils.getNodeModulesBinPath('eslint'), processArgumentsS);
