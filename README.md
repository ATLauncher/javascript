# ATLauncher Style Guide
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FATLauncher%2Fjavascript.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FATLauncher%2Fjavascript?ref=badge_shield)


This is the style guide for ATLauncher.

## Contents

This repository is a mono repo powered with Lerna and contains the following packages:

* @atlauncher/atlauncher-scripts
* @atlauncher/babel-preset-atlauncher
* @atlauncher/commitlint-config-atlauncher
* @atlauncher/eslint-config-atlauncher
* @atlauncher/eslint-plugin-atlauncher

## Packages

Each package is a single npm package within the `` scope and is independently published
from one another.

Lerna provides the ability to link the modules up with one another so that packages can be devleoped
with a dependency on another package in this mono repo without the need to publish ahead of time.

### @atlauncher/atlauncher-scripts

This package provides all the scripts needed to run, test, lint, build and more for ATLauncher
projects.

Simply include into your project and use the `atlauncher-scripts` command.

This is intended to allow all projects the ability to run commands the same way and evolve how we
do certain things over time by just having it contained within one directory.

* [More Info](https://github.com/ATLauncher/javascript/tree/master/packages/atlauncher-scripts)
* [NPM](https://www.npmjs.com/package/@atlauncher/atlauncher-scripts)

### @atlauncher/babel-preset-atlauncher

This package contains a preset for Babel which is setup to work for ATLauncher's projects.

It's intended to support all browsers and versions we need to and be a quick preset to get up and
going quickly.

* [More Info](https://github.com/ATLauncher/javascript/tree/master/packages/babel-present-atlauncher)
* [NPM](https://www.npmjs.com/package/@atlauncher/babel-present-atlauncher)

### @atlauncher/commitlint-config-atlauncher

This package ensures that all commits done to ATLauncher repositories follows our commit standards.

* [More Info](https://github.com/ATLauncher/javascript/tree/master/packages/commitlint-config-atlauncher)
* [NPM](https://www.npmjs.com/package/@atlauncher/commitlint-config-atlauncher)

### @atlauncher/eslint-config-atlauncher

This package contains our ESLint configs.

This allows all ATLauncher projects to simply extend from this base config to ensure that all code
is consistent and follows the same styling rules.

* [More Info](https://github.com/ATLauncher/javascript/tree/master/packages/eslint-config-atlauncher)
* [NPM](https://www.npmjs.com/package/@atlauncher/eslint-config-atlauncher)

### @atlauncher/eslint-plugin-atlauncher

This package contains our custom ESLint rules.

Currently only used to allow ignoring method names from requiring `@returns` JSDoc comments.

* [More Info](https://github.com/ATLauncher/javascript/tree/master/packages/eslint-plugin-atlauncher)
* [NPM](https://www.npmjs.com/package/@atlauncher/eslint-plugin-atlauncher)

## Developing

To get developing with any of these modules, first install Lerna globally:

```bash
npm install --global lerna
```

Then go ahead and run a `npm install` in this directory. This will bootstrap all the packages which
will run a npm install and link and cross dependencies.

## Publishing

### Production

```bash
npm run publish
```

Or for a single package:

```bash
npm run publish -- --scope @atlauncher/package-name
```

### Testing versions

```bash
npm run publish:prerelease
```

Or for a single package:

```bash
npm run publish:prerelease -- --scope @atlauncher/package-name
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FATLauncher%2Fjavascript.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FATLauncher%2Fjavascript?ref=badge_large)