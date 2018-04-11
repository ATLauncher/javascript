const utils = require('../utils');

const packageJsons = [utils.getProjectPath('package.json')].concat(utils.getExplicitProjectPaths('package.json'));

const processArguments = packageJsons.map((file) => [
    '--rules-file',
    utils.getConfigFile('.npmpackagejsonlintrc'),
    '--file',
    file,
]);

utils.spawnSyncProcess(utils.getNodeModulesBinPath('pjl-cli'), processArguments);
