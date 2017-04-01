# ATLauncher Style Guide
ATLauncher Style Guide is a style guide containing sets of components that we use across all our projects as well as our
defined styling/linting rules for ESLint and CSSLint.

## Aim
The aim is to create a set of reusable components that can be imported and used across multiple projects at ATLauncher.
This will keep things looking consistent and provide an easy way to get up and running visually with new projects.

As well as that, this project aims to home our styling/linting rules which are used on all projects.

## Design
The style guide follows a few principles for it's design.

 - Use BEM naming on all classes created.
 - Prefix all classes created with `atl` so to distinguish style guide components from other components.

## Development
To start developing the style guide you must first install [NodeJS](https://nodejs.org). We highly recommend you use
[NVM](https://github.com/creationix/nvm) to manage the versions of NodeJS on your system.

If you're installing NodeJS manually then please make sure you're using the latest 6.x LTS branch.

If you're using NVM as recommended then you can simply run `nvm use` in this directory to use our currently recommended
version of NodeJS for this repository.

Once installed simply run `npm install` to install all the packages needed for this repository.

### Opening the style guide
To open the style guide for development run `npm run storybook`. This will spin up a web server on `localhost:9001` that
you can use to see the style guide and have live updating while developing with it.

## Sub packages
This repository also contains sub packages which are used to host our ESLint and CSSLint rules/packages. These are
hosted in the `packges/` directory and each contain their own `README.md` files which you can see for more details on
each sub package.