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
                <div className="prop">
                    <span className="label">Author: </span>
                    <span className="value">{this.props.photo.author}</span>
                </div>
                <div className="prop">
                    <span className="label">Date: </span>
                    <span className="value">{this.props.photo.date.toDateString()}</span>
                </div>
                <div className="prop">
                    <span className="label">Description: </span>
                    <span className="value">{this.props.photo.description}</span>
                </div>
            </div>
        );
    }
}

export default Photo;
