const base = require('./index');

const rules = base.extends.concat([
    // configs
    './configs/electron'
].map(require.resolve));

module.exports = {
    plugins: base.plugins,
    extends: rules,
    env:  base.env,
    parser:  base.parser,
    parserOptions:  base.parserOptions
};
