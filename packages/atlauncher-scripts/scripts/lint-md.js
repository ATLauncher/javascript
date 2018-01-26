const utils = require('../utils');

const processArguments = [
    '--config',
    utils.getConfigFile('.markdownlint.json'),
    utils.getProjectPath('**/*.md'),
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('markdownlint'), processArguments);
