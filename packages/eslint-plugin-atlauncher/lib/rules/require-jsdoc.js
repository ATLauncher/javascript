/**
 * @fileoverview Ensures functions have valid JSDoc comments
 * @author Ryan Dowling
 */
"use strict";

const astUtils = require("eslint");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Ensures functions have JSDoc comments",
            category: "Stylistic Issues",
            recommended: false,
        },

        schema: [
            {
                type: "object",
                properties: {
                    require: {
                        type: "object",
                        properties: {
                            ClassDeclaration: {
                                type: "boolean",
                            },
                            MethodDefinition: {
                                type: "boolean",
                            },
                            FunctionDeclaration: {
                                type: "boolean",
                            },
                            ArrowFunctionExpression: {
                                type: "boolean",
                            },
                        },
                        additionalProperties: false,
                    },
                    ignore: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },

    create: function(context) {
        const source = context.getSourceCode();
        const DEFAULT_OPTIONS = {
            FunctionDeclaration: true,
            MethodDefinition: false,
            ClassDeclaration: false,
        };
        const options = Object.assign(DEFAULT_OPTIONS, context.options[0] && context.options[0].require || {});
        const ignore = context.options[0] && context.options[0].ignore || [];

        /**
         * Report the error message
         * @param {ASTNode} node node to report
         * @returns {void}
         */
        function report(node) {
            context.report({ node, message: "Missing JSDoc comment." });
        }

        /**
         * Check if the jsdoc comment is present for class methods
         * @param {ASTNode} node node to examine
         * @returns {void}
         */
        function checkClassMethodJsDoc(node) {
            if (node.parent.type === "MethodDefinition") {
                if (isIgnored(node)) {
                    return;
                }

                const jsdocComment = source.getJSDocComment(node);

                if (!jsdocComment) {
                    report(node);
                }
            }
        }

        /**
         * Check if this node is in the ignore list or not
         * @param {ASTNode} node node to examine
         * @returns {boolean|null}
         */
        function isIgnored(node) {
            const name = getNodeName(node);

            return name !== null && ignore.indexOf(name) !== -1;
        }

        /**
         * Get the name of this node
         * @param {ASTNode} node node to examine
         * @returns {string}
         */
        function getNodeName(node) {
            if (node.id) {
                return node.id.name;
            } else {
                const name = getStaticPropertyName(node.parent);

                if (name) {
                    return name;
                }
            }

            return null;
        }


        /**
         * Gets the property name of a given node.
         * The node can be a MemberExpression, a Property, or a MethodDefinition.
         *
         * If the name is dynamic, this returns `null`.
         *
         * For examples:
         *
         *     a.b           // => "b"
         *     a["b"]        // => "b"
         *     a['b']        // => "b"
         *     a[`b`]        // => "b"
         *     a[100]        // => "100"
         *     a[b]          // => null
         *     a["a" + "b"]  // => null
         *     a[tag`b`]     // => null
         *     a[`${b}`]     // => null
         *
         *     let a = {b: 1}            // => "b"
         *     let a = {["b"]: 1}        // => "b"
         *     let a = {['b']: 1}        // => "b"
         *     let a = {[`b`]: 1}        // => "b"
         *     let a = {[100]: 1}        // => "100"
         *     let a = {[b]: 1}          // => null
         *     let a = {["a" + "b"]: 1}  // => null
         *     let a = {[tag`b`]: 1}     // => null
         *     let a = {[`${b}`]: 1}     // => null
         *
         * @param {ASTNode} node - The node to get.
         * @returns {string|null} The property name if static. Otherwise, null.
         */
        function getStaticPropertyName(node) {
            let prop;

            switch (node && node.type) {
                case "Property":
                case "MethodDefinition":
                    prop = node.key;
                    break;

                case "MemberExpression":
                    prop = node.property;
                    break;

                // no default
            }

            switch (prop && prop.type) {
                case "Literal":
                    return String(prop.value);

                case "TemplateLiteral":
                    if (prop.expressions.length === 0 && prop.quasis.length === 1) {
                        return prop.quasis[0].value.cooked;
                    }
                    break;

                case "Identifier":
                    if (!node.computed) {
                        return prop.name;
                    }
                    break;

                // no default
            }

            return null;
        }

        /**
         * Check if the jsdoc comment is present or not.
         * @param {ASTNode} node node to examine
         * @returns {void}
         */
        function checkJsDoc(node) {
            if (isIgnored(node)) {
                return;
            }

            const jsdocComment = source.getJSDocComment(node);

            if (!jsdocComment) {
                report(node);
            }
        }

        return {
            FunctionDeclaration(node) {
                if (options.FunctionDeclaration) {
                    checkJsDoc(node);
                }
            },
            FunctionExpression(node) {
                if (options.MethodDefinition) {
                    checkClassMethodJsDoc(node);
                }
            },
            ClassDeclaration(node) {
                if (options.ClassDeclaration) {
                    checkJsDoc(node);
                }
            },
            ArrowFunctionExpression(node) {
                if (options.ArrowFunctionExpression && node.parent.type === "VariableDeclarator") {
                    checkJsDoc(node);
                }
            }
        };
    }
};
