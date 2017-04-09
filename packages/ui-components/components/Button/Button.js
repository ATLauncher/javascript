import React, { PropTypes } from 'react';

import './Button.less';

/**
 * This is a Button.
 */
class Button extends React.PureComponent {
    static propTypes = {
        onClick: PropTypes.func,
        text: PropTypes.string.isRequired
    };

    static defaultProps = {
        onClick: () => {}
    };

    render() {
        return (
            <button className="atl-button" onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
