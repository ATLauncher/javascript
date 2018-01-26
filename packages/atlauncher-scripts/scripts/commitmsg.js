const utils = require('../utils');

// git edit file
const editFile = './.git/COMMIT_EDITMSG';

const processArguments = ['-x', '@atlauncher/commitlint-config-atlauncher', '-e', editFile];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('commitlint'), processArguments);
