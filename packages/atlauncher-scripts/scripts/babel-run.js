const utils = require('../utils');

const processArguments = [
    utils.getProjectPath(process.argv.slice(2).join(' ')),
    '--presets=@atlauncher/babel-preset-atlauncher',
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('babel-node'), processArguments);
