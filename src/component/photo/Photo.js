import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import PhotoRecord from '../../domain/photo/Photo';

class Photo extends PureComponent {

    static propTypes = {
        photo: PropTypes.instanceOf(PhotoRecord)
    };

    render() {
        return (
            <div className="photo">
                <div
                    className="image"
                    style={getStyle(this.props.photo)}
                />
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
                {this.renderErrorIcon()}
            </div>
        );
    }

    renderErrorIcon(){
        if(!this.props.photo.error){
            return null;
        }

        return (
            <div className="prop">
                <span className="error">*Some information may be missing.</span>
            </div>
        );
    }
}

export default Photo;

function getStyle(photo) {
    return {
        backgroundImage: `url(${photo.url})`
    }
}