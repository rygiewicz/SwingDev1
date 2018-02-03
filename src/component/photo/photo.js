import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PhotoRecord from '../../domain/photo/photo';

class Photo extends PureComponent {

    static propTypes = {
        photo: PropTypes.instanceOf(PhotoRecord)
    };

    render() {
        return (
            <div className="photo">
                <span className="prop author">{this.props.photo.author}</span>
                <span className="prop date">{this.props.photo.date.toDateString()}</span>
                <span className="prop description">{this.props.photo.description}</span>
            </div>
        );
    }
}

export default Photo;
