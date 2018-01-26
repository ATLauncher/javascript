# @atlauncher/commitlint-config-atlauncher

Our commitlint rules for how commit messages should be formatted for all ATLauncher projects.

## Installation

You'll need to install [@commitlint/cli](https://github.com/marionebl/commitlint/tree/master/@commitlint/cli) along with
this config:

```bash
npm install @commitlint/cli @atlauncher/commitlint-config-atlauncher --save-dev
```

Then create your `commitlint.config.js` file in the root of your project:

```js
module.exports = {
    extends: ['@commitlint/config-angular']
};
```

## Overview of rules
We follow [conventional commits](https://conventionalcommits.org/) and the following is an overview of the rules we have
enabled for commitlint:

  * Commits make up the following format: `type(scope): message`
  * All commits must have one of the following types:
    * build
    * chore
    * ci
    * docs
    * feat
    * fix
    * perf
    * refactor
    * revert
    * style
    * test
  * Scope is optional but should be provided when possible
    * Lerna projects should use the name of the package the commit is for
  * Commit messages should be no longer than 72 characters
  * Breaking changes should be noted by placing `BREAKING CHANGE` at the beginning of the commit description
