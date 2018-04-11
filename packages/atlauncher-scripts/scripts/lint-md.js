const utils = require('../utils');

const processArguments = [
    '--config',
    utils.getConfigFile('.markdownlint.json'),
    '--ignore',
    '**/node_modules/**',
    '--ignore',
    '**/coverage/**',
    '--ignore',
    '**/CHANGELOG.md',
    '**/*.md',
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('markdownlint'), processArguments);
