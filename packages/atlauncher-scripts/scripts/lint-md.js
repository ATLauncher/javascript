const utils = require('../utils');

const processArguments = [
    '--config',
    utils.getConfigFile('.markdownlint.json'),
    '--ignore',
    utils.getNodeModulesPath(),
    '--ignore',
    utils.getProjectPath('CHANGELOG.md'),
    utils.getProjectPath('**/*.md'),
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('markdownlint'), processArguments);
