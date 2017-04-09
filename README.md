# ATLauncher Style Guide
This is the style guide for ATLauncher.

## Contents
This repository is a mono repo powered with Lerna and contains the following packages:

 - babel-preset-atlauncher
 - eslint-config-atlauncher
 - ui-components

## Packages
Each package is a single npm package within the `@atlauncher` scope and is independently published from one another.

Lerna provides the ability to link the modules up with one another so that packages can be devleoped with a
dependency on another package in this mono repo without the need to publish ahead of time.

### babel-preset-atlauncher
This package contains a preset for Babel which is setup to work for ATLauncher's projects.

It's intended to support all browsers and versions we need to and be a quick preset to get up and going quickly.

- [More Info](https://github.com/ATLauncher/style-guide/blob/master/babel-present-atlauncher/README.md)
- [NPM](https://www.npmjs.com/package/@atlauncher/babel-present-atlauncher)

### eslint-config-atlauncher
This package contains our ESLint configs.

This allows all ATLauncher projects to simply extend from this base config to ensure that all code is consistent and
follows the same styling rules.

- [More Info](https://github.com/ATLauncher/style-guide/blob/master/eslint-config-atlauncher/README.md)
- [NPM](https://www.npmjs.com/package/@atlauncher/eslint-config-atlauncher)

### ui-components
This package contains all the components used by ATLauncher in it's various projects to provide a consistent visual
look through all sites and applications.

It also contains configs to build a React Storybook instance to be able to visually identify and play with components.

- [More Info](https://github.com/ATLauncher/style-guide/blob/master/ui-components/README.md)
- [NPM](https://www.npmjs.com/package/@atlauncher/ui-components)
- [Storybook](https://atlauncher.github.io/style-guide/)

## Developing
To get developing with any of these modules, first install Lerna globally:

```bash
npm install --global lerna
```

Then go ahead and run a `npm install` in this directory. This will bootstrap all the packages which will run a npm
install and link and cross dependencies.

Then to get up and developing with the modules, simply run `npm run storybook:dev` which will start a server at
`http://127.0.0.1:9001` with the storybook for the `ui-components` package.

To run the linter simply run `npm run lint` which will run the linter on all the packages.

To run tests on all the packages, simply run `npm run test`.

## Publishing
### Production
```bash
lerna publish -m "chore: publish release"
```

### Beta versions
```bash
lerna publish --repo-version 0.1.0-beta.1 -m "chore: publish first beta release of 0.1.0-beta.1" --npm-tag=next
```
