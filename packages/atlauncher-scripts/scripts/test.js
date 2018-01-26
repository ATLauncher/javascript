const utils = require('../utils');

// do this as the first thing so that any code reading it knows the right env
process.env.NODE_ENV = 'test';

const args = process.argv.slice(2);
let watch = false;
let debug = false;
let coverage = false;
let noConcurrency = false;

if (args.length) {
    args.forEach((arg) => {
        if (arg === '--watch') {
            watch = true;
        }

        if (arg === '--coverage') {
            coverage = true;
        }

        if (arg === '--debug') {
            debug = true;
        }

        if (arg === '--noConcurrency') {
            noConcurrency = true;
        }
    });
}

const processArguments = [
    '--rootDir',
    utils.getProjectPath(),
    '--config',
    utils.getConfigFile('jest.json'),
    watch && '--watch',
    debug && '--debug',
    coverage && '--coverage',
    noConcurrency && '--runInBand',
];

utils.spawnSyncProcess(utils.getNodeModulesBinPath('jest'), processArguments);
