# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="0.2.1"></a>
## [0.2.1](https://github.com/ATLauncher/javascript/compare/@atlauncher/atlauncher-scripts@0.2.0...@atlauncher/atlauncher-scripts@0.2.1) (2018-04-28)


### Bug Fixes

* remove eslint-plugin-immutable ([a6a54e4](https://github.com/ATLauncher/javascript/commit/a6a54e4))




<a name="0.2.0"></a>
# [0.2.0](https://github.com/ATLauncher/javascript/compare/@atlauncher/atlauncher-scripts@0.1.0...@atlauncher/atlauncher-scripts@0.2.0) (2018-04-25)


### Features

* add in more files for the clean command and more flags for control ([fc7d6c0](https://github.com/ATLauncher/javascript/commit/fc7d6c0))




<a name="0.1.0"></a>
# 0.1.0 (2018-04-11)


### Bug Fixes

* **app:** run .bin files from NPM as the main command and not node ([34b5b50](https://github.com/ATLauncher/javascript/commit/34b5b50))
* **app:** when on Windows, try to use the cmd ([072b2ec](https://github.com/ATLauncher/javascript/commit/072b2ec))
* **atlauncher-scripts:** add in chokidar and fix linting ([bd4289a](https://github.com/ATLauncher/javascript/commit/bd4289a))
* **atlauncher-scripts:** add in colors dependency ([f713e72](https://github.com/ATLauncher/javascript/commit/f713e72))
* **atlauncher-scripts:** add in cross-spawn to dependencies ([40befde](https://github.com/ATLauncher/javascript/commit/40befde))
* **atlauncher-scripts:** add in jest and babel-jest packages ([3a4025b](https://github.com/ATLauncher/javascript/commit/3a4025b))
* **atlauncher-scripts:** add is-windows in package.json not in lerna root ([7588d74](https://github.com/ATLauncher/javascript/commit/7588d74))
* **atlauncher-scripts:** don't allow running lint watch in lerna root ([63af3ad](https://github.com/ATLauncher/javascript/commit/63af3ad))
* **atlauncher-scripts:** fix broken scripts with : and eslintignore path ([31d9364](https://github.com/ATLauncher/javascript/commit/31d9364))
* **atlauncher-scripts:** fix issue with processes exiting right away ([39c7609](https://github.com/ATLauncher/javascript/commit/39c7609))
* **atlauncher-scripts:** fix issue with root dir not being correct when running jest ([6bedb83](https://github.com/ATLauncher/javascript/commit/6bedb83))
* **atlauncher-scripts:** fix linting errors ([086aafd](https://github.com/ATLauncher/javascript/commit/086aafd))
* **atlauncher-scripts:** fix markdown linting not ignoring node_modules ([09f4715](https://github.com/ATLauncher/javascript/commit/09f4715))
* **atlauncher-scripts:** fix node_modules path not showing in lint:md ([738c387](https://github.com/ATLauncher/javascript/commit/738c387))
* **atlauncher-scripts:** fix running commands not filtering out booleans ([357481a](https://github.com/ATLauncher/javascript/commit/357481a))
* **atlauncher-scripts:** rename .jestrc to jest.json so jest will use it ([e261385](https://github.com/ATLauncher/javascript/commit/e261385))


### Features

* **atlauncher-scripts:** add in ability to forceExit Jest ([ae985db](https://github.com/ATLauncher/javascript/commit/ae985db))
* **atlauncher-scripts:** add in atlauncher-scripts ([ca4395c](https://github.com/ATLauncher/javascript/commit/ca4395c))
* **atlauncher-scripts:** add in babel-run and build commands ([e8b5bab](https://github.com/ATLauncher/javascript/commit/e8b5bab))
* **atlauncher-scripts:** add in commitmsg script for commitlint ([b5384de](https://github.com/ATLauncher/javascript/commit/b5384de))
* **atlauncher-scripts:** add in jest config ([2d88c6a](https://github.com/ATLauncher/javascript/commit/2d88c6a))
* **atlauncher-scripts:** add in markdown linting ([044fc06](https://github.com/ATLauncher/javascript/commit/044fc06))
* **atlauncher-scripts:** add in noConcurrency option for test ([9e859f9](https://github.com/ATLauncher/javascript/commit/9e859f9))
* **atlauncher-scripts:** add in package.json linting ([4601fa4](https://github.com/ATLauncher/javascript/commit/4601fa4))
* **atlauncher-scripts:** add in preset to babel ([917b9cd](https://github.com/ATLauncher/javascript/commit/917b9cd))
* **atlauncher-scripts:** add more ignores to md lint and lint **/*.md ([97c39e6](https://github.com/ATLauncher/javascript/commit/97c39e6))
* **atlauncher-scripts:** check all package.json under lerna ([c0ff146](https://github.com/ATLauncher/javascript/commit/c0ff146))
* **atlauncher-scripts:** if project uses lerna, run lint on packagesthis allows for atlauncher-scripts to be used in the root of a lerna project and it's commands (such as linting JS files) to be run on all lerna projects defined in lerna.json ([b9022e1](https://github.com/ATLauncher/javascript/commit/b9022e1))
* **atlauncher-scripts:** update default jest.json file ([2870b64](https://github.com/ATLauncher/javascript/commit/2870b64))
* **atlauncher-scripts:** update jest config to not use only src folder ([08cec65](https://github.com/ATLauncher/javascript/commit/08cec65))
