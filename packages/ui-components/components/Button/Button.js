import React, { PropTypes } from 'react';

import './Button.less';

class Button extends React.Component {
    render() {
        return (
            <button className="atl-button" onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;