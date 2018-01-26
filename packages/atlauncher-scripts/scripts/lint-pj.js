const utils = require('../utils');

const processArguments = [
    '--rules-file',
    utils.getConfigFile('.npmpackagejsonlintrc'),
    utils.getConfigFile('package.json'),
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('pjl-cli'), processArguments);
