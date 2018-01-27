# @atlauncher/babel-preset-atlauncher

This is the babel preset to use for all JavaScript based projects using Babel at ATLauncher.

## Installation

To install simply run:

```bash
npm install --save-dev @atlauncher/babel-preset-atlauncher
```

And then create (or replace) a `.babelrc` file in the root directory of your project with the following contents:

```json
{
    "presets": ["@atlauncher/babel-preset-atlauncher"]
}
```

## Building

An important step towards building is to provide a `FINAL_ENVIRONMENT` environment variable when running babel to build.

Setting this to a value of `node` or simply leaving it out, will build for a NodeJS environment.

Setting it to `browser` will ensure that it's built with our browserlist in mind.

You should also always make sure to pass through the `NODE_ENV` environment variable for the appropriate environment
that you're building in, so that correct optimisations are made.
