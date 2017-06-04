module.exports = {
    rules: {
        // require all emoji to be wrapped in `<span>` tags with an `aria-label` property
        'jsx-a11y/accessible-emoji': 'error',

        // requires all anchor tags to have content that isn't hidden
        'jsx-a11y/anchor-has-content': 'error',

        // disallow using invalid aria attributes
        'jsx-a11y/aria-props': 'error',

        // require all aria properties are using the correct value
        'jsx-a11y/aria-proptypes': 'error',

        // require valid aria role properties
        'jsx-a11y/aria-role': 'error',

        // require all non DOM tags don't have aria attributes
        'jsx-a11y/aria-unsupported-elements': 'error',

        // ensure all headings have content that isn't hidden
        'jsx-a11y/heading-has-content': 'error',

        // don't allow anchor tags to have a href that is just `#`
        'jsx-a11y/href-no-hash': 'error',

        // ensure html tag has a `lang` property
        'jsx-a11y/html-has-lang': 'error',

        // require all iframe tags to have a `title` property
        'jsx-a11y/iframe-has-title': 'error',

        // require all image tags to have an `alt` property
        'jsx-a11y/alt-text': 'error',

        // don't allow the workds `image`, `photo` or `picture` in image `alt` property
        'jsx-a11y/img-redundant-alt': 'error',

        // require all `label` elements have a `htmlFor` property
        'jsx-a11y/label-has-for': 'error',

        // ensure the `lang` property on the `html` element is valid
        'jsx-a11y/lang': 'error',

        // don't allow `accessKey` properties on elements
        'jsx-a11y/no-access-key': 'error',

        // disallows using `marquee` and `blink` elements
        'jsx-a11y/no-distracting-elements': 'error',

        // require the use of `onBlur` instead of `onChange`
        'jsx-a11y/no-onchange': 'error',

        // dont allow setting roles on elements that already have that role given by browsers
        'jsx-a11y/no-redundant-roles': 'error',

        // ensure only interactive DOM elements can have mount/keyboard handlers
        'jsx-a11y/no-static-element-interactions': 'error',

        // ensure roles have the required aria properties
        'jsx-a11y/role-has-required-aria-props': 'error',

        // ensure all roles only use supported aria properties
        'jsx-a11y/role-supports-aria-props': 'error',

        // ensure the `scope` property is only used on `th` elements
        'jsx-a11y/scope': 'error',

        // don't allow positive values for `tabIndex`
        'jsx-a11y/tabindex-no-positive': 'error',

        // warn when media doesn't have caption`
        'jsx-a11y/media-has-caption': 'warn',

        // don't allow tabIndex on non interactive elements
        'jsx-a11y/no-noninteractive-tabindex': 'error',
    },
};
