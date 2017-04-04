/* eslint-disable import/no-commonjs */

module.exports = {
    rules: {
        "no-empty": "off", // this is covered by the 'no-empty-blocks' plugin
        "no-empty-blocks/no-empty-blocks": ["error", "allowCatch"],
        "no-trailing-spaces": "error",
        "no-multiple-empty-lines": "error",
        "comma-dangle": [
            "error",
            "never"
        ],
        "no-use-before-define": [
            "error",
            "nofunc"
        ]
    }
};