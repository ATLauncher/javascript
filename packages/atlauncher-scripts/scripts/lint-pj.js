const utils = require('../utils');

const processArguments = [
    '--rules-file',
    utils.getRootFile('.npmpackagejsonlintrc'),
    utils.getRootFile('package.json'),
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('pjl-cli'), processArguments);
