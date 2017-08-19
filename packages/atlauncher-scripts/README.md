# atlauncher-scripts
This package aims to be the central connection point between modules at ATLauncher and our
standards.

The idea comes from
[react-scripts](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts)
used by `create-react-app` and is intended to abstract our standard process away from each module
into a single package.

## Configuration
Some commands are configured using the `config` property in `package.json`.

Different commands can have different configs, an example is below:

```json
{
    "config": {
        "atlauncher": {
            "someConfig": 44
        }
    }
}
```

Alternatively you can specify configuration in the command line by using format
`--{configName}={value}` so for instance `--someConfig=44`.

## Commands
Below is a list of commands that you can run and their arguments/switches.

### lint
`atlauncher-scripts lint [type] [--watch] [--debug]`

Takes in one argument which is the type of files to lint. Should be either `js` or the default of
`all`. CSS linting coming in the future.

You can provide a `--watch` switch to allow watching of files.

You can also provide a `--debug` switch to allow turning on debug mode for ESLint.

#### Overriding ESLint config
If there is no `.eslintrc` file in your projects directory, we will use the
`@atlauncher/eslint-config-atlauncher` rules with their defaults.

#### Overriding ESLint ignore
If there is no `.eslintignore` file in your projects directory, we will use our base `.eslintignore`
file.

### test
`atlauncher-scripts test [--watch] [--debug]`

You can provide a `--watch` switch to allow watching of your tests.

You can also provide a `--debug` switch to allow turning on debug mode.

You can also provide a `--coverage` switch to do coverage reporting.

### clean
`atlauncher-scripts clean [--dry-run]`

You can provide a `--dry-run` switch to not make any changes to the file system.

#### Configuration
You can optionally provide an array of extra folders/files to clean:

```json
{
    "config": {
        "atlauncher": {
            "extraToClean": [
                "cleanMeUp"
            ]
        }
    }
}
```
