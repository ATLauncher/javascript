const utils = require('../utils');

const processArguments = [
    '--config',
    utils.getConfigFile('.markdownlint.json'),
    '--ignore',
    utils.getProjectPath('node_modules'),
    '--ignore',
    utils.getProjectPath('CHANGELOG.md'),
    utils.getProjectPath('**/*.md'),
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('markdownlint'), processArguments);
