import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Photo extends PureComponent {

    static propTypes = {
        photo: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>{this.props.photo}</div>
        );
    }
}

export default Photo;