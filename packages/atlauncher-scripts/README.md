# atlauncher-scripts

This package aims to be the central connection point between modules at ATLauncher and our
standards.

The idea comes from [react-scripts](https://github.com/facebookincubator/create-react-app)
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

## Overwriting command defaults

Many files such as `.eslintrc`, `.markdownlint.json` and `.eslintignore` which are used by commands
can easily be overwritten by simply putting the same file in the root of the project using
`atlauncher-scripts`.

While this is possible, if you need to override some config, you should consider doing so in the
defaults in this repository.

## Commands

Below is a list of commands that you can run and their arguments/switches.

### babel-run

`atlauncher-scripts babel-run [arguments]`

This will run the given arguments with `babel-run`.

### build

`atlauncher-scripts build`

This will build the files in the `src/` directory with babel and put the compiled files into the `dist/` directory.

### clean

`atlauncher-scripts clean [--dry-run]`

You can provide a `--dry-run` switch to not make any changes to the file system.

You can optionally provide an array of extra folders/files to clean in your `package.json`:

```json
{
    "config": {
        "atlauncher": {
            "extraToClean": ["cleanMeUp"]
        }
    }
}
```

### commitmsg

`atlauncher-scripts commitmsg`

This is intended to be used with `husky` to provide a git hook on commit.

It currently checks the commit message to make sure it's valid and follows
[our guidelines](https://github.com/ATLauncher/style-guide/blob/master/commitlint-config-atlauncher/README.md).

### lint:js

`atlauncher-scripts lint:js [--watch] [--debug]`

Lints all JS files in the `src/` directory.

You can provide a `--watch` switch to allow watching of files.

You can also provide a `--debug` switch to allow turning on debug mode.

### lint:md

`atlauncher-scripts lint:md`

Lints all MD files.

### lint:pj

`atlauncher-scripts lint:pj`

Lints the `package.json` file.

### test

`atlauncher-scripts test [--watch] [--debug] [--coverage] [--noConcurrency] [--forceExit]`

You can provide a `--watch` switch to allow watching of your tests.

You can also provide a `--debug` switch to allow turning on debug mode.

You can also provide a `--coverage` switch to do coverage reporting.

You can also provide a `--noConcurrency` switch to not run tests in parallel (useful for CI).

You can also provide a `--forceExit` switch to force exit the process when Jest finishes running.
