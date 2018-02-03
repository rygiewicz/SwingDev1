import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PhotoRecord from '../../domain/photo/photo';

class Photo extends PureComponent {

    static propTypes = {
        photo: PropTypes.instanceOf(PhotoRecord)
    };

    render() {
        return (
            <div>{this.props.photo.author}</div>
        );
    }
}

export default Photo;