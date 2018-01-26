const utils = require('../utils');

const processArguments = [
    utils.getProjectPath('src'),
    '--copy-files',
    '--out-dir',
    utils.getProjectPath('dist'),
    '--presets=@atlauncher/babel-preset-atlauncher',
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('babel'), processArguments);
