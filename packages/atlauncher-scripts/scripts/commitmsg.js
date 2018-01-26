const utils = require('../utils');

const processArguments = [
    '-x',
    '@atlauncher/commitlint-config-atlauncher',
    '-e',
    './.git/COMMIT_EDITMSG',
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('commitlint'), processArguments);
