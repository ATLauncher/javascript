# @atlauncher/eslint-plugin-atlauncher

Custom ESLint rules for use with eslint-config-atlauncher

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `@atlauncher/eslint-plugin-atlauncher`:

```bash
npm install @atlauncher/eslint-plugin-atlauncher --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@atlauncher/eslint-plugin-atlauncher` globally.

## Usage

Add `@atlauncher/atlauncher` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "@atlauncher/atlauncher"
  ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "atlauncher/rule-name": 2
  }
}
```

## Supported Rules

* atlauncher/require-jsdoc - this is the same as the ESLint 'require-jsdoc' rule, but provides an extra 'ignore' option
  for function/method/class names to ignore
