module.exports = {
    settings: {
        react: {
            version: '15.5.3'
        }
    },
    rules: {
        // require setting of `displayName` property on components
        'react/display-name': 'error',

        // forbids the use of `className` and `style` properties on components, only on root elements (div, span, etc)
        'react/forbid-component-props': ['error', {forbid: ['className', 'style']}],

        // don't allow the use of any or array PropTypes as they're too vague
        'react/forbid-prop-types': ['error', {forbid: ['any', 'array']}],

        // don't allow using other components propTypes unless exported out the component
        'react/forbid-foreign-prop-types': 'error',

        // don't allow using array indexes as key's when looping over arrays for components
        'react/no-array-index-key': 'error',

        // don't allow children of a component to be passed in as a property, they should be done via JSX nesting
        'react/no-children-prop': 'error',

        // warn when using `dangerouslySetInnerHTML` as we shouldn't be using it, but sometimes may be necessary
        'react/no-danger': 'warn',

        // don't allow using `dangerouslySetInnerHTML` as well as children via JSX nesting
        'react/no-danger-with-children': 'error',

        // don't allow using deprecated methods of React
        'react/no-deprecated': 'error',

        // don't allow `setState` in `componentDidMount` methods outside of `onMount`
        'react/no-did-mount-set-state': 'error',

        // don't allow `setState` in `componentDidUpdate` methods outside of `onUpdate`
        'react/no-did-update-set-state': 'error',

        // don't allow mutating state via `this.state`
        'react/no-direct-mutation-state': 'error',

        // don't allow use of `findDOMNode`
        'react/no-find-dom-node': 'error',

        // don't allow use of deprecated `isMounted` function
        'react/no-is-mounted': 'error',

        // don't allow more than one component per file, even stateless components
        'react/no-multi-comp': ['error', {ignoreStateless: false}],

        // don't allow using the return value from `ReactDOM.render()`
        'react/no-render-return-value': 'error',

        // don't allow using string ref attributes
        'react/no-string-refs': 'error',

        // don't allow the use of unescaped entities in JSX
        'react/no-unescaped-entities': 'error',

        // enforce the use of camelCase property names
        'react/no-unknown-property': 'error',

        // don't allow unused PropType's
        'react/no-unused-prop-types': 'error',

        // requires all components to be written as ES6 classes and not via `React.createClass`
        'react/prefer-es6-class': 'error',

        // ensures stateless components are used where possible over `React.Component` but allow `React.PureComponent`
        'react/prefer-stateless-function': ['warn', {ignorePureComponents: true}],

        // ensures PropType's are written and contain all properties are added into it
        'react/prop-types': 'error',

        // ensures React has been imported into all files using JSX
        'react/react-in-jsx-scope': 'error',

        // requires all PropType's that aren't required to have a default defined for it
        'react/require-default-props': 'error',

        // requires render functions return correctly
        'react/require-render-return': 'error',

        // requires components with no children to use self closing tags
        'react/self-closing-comp': 'error',

        // ensures correct ordering of methods in a class component
        'react/sort-comp': ['error', {
            order: [
                'static-methods',
                'lifecycle',
                'everything-else',
                'rendering'
            ],
            groups: {
                rendering: [
                    '/^render.+$/',
                    'render'
                ]
            }
        }],

        // require style properties to be defined in a variable
        'react/style-prop-object': 'error',

        // don't allow self closing DOM elements to have children (img, br, etc)
        'react/void-dom-elements-no-children': 'error',

        // all boolean attributes must be specified as `<A prop={true} />` rather than just `<A prop />`
        'react/jsx-boolean-value': ['error', 'always'],

        // ensures any multiline components will have closing tag aligning with the opening tag
        'react/jsx-closing-bracket-location': 'error',

        // don't allow spaces in between JSX variables like `<A prop={ test } />`
        'react/jsx-curly-spacing': ['error', 'never'],

        // don't allow spaces around the `=` in JSX variables like `<A prop = {test} />`
        'react/jsx-equals-spacing': ['error', 'never'],

        // only allow naming components as .js and not .jsx
        'react/jsx-filename-extension': ['error', {extensions: ['.js']}],

        // require any multiline components to have the first property on a new line
        'react/jsx-first-prop-new-line': ['error', 'multiline'],

        // ensure all properties use event handlers prefixed with `on` and class methods prefixed with `handle`
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on'
        }],

        // ensure all indents in JSX use 4 spaces
        'react/jsx-indent': ['error', 4],

        // ensure all indents in props to use 4 spaces
        'react/jsx-indent-props': ['error', 4],

        // require the `key` property to be specified where needed
        'react/jsx-key': 'error',

        // don't allow the use of HTML comments and enforce JSX comment style
        'react/jsx-no-comment-textnodes': 'error',

        // don't allow duplicate props
        'react/jsx-no-duplicate-props': 'error',

        // don't allow `target="_blank"` on links without `rel="noopener noreferrer"`
        'react/jsx-no-target-blank': 'error',

        // don't allow using undefined components
        'react/jsx-no-undef': 'error',

        // require all components use PascalCase
        'react/jsx-pascal-case': 'error',

        // require a space before self closing tags such as `<A prop={prop} />` rather than `<A prop={prop}/>`
        'react/jsx-space-before-closing': 'error',

        // ensures components that import React don't show it as being unused
        'react/jsx-uses-react': 'error',

        // ensures imported components don't show up as unused when used in JSX
        'react/jsx-uses-vars': 'error',

        // ensures multiline JSX is wrapped within parenthesis
        'react/jsx-wrap-multilines': 'error'
    }
};
