import React, {Component} from 'react';

import Photo from './Photo';

class PhotoList extends Component {

    render() {
        return (
            <div id="photo-list">{this.renderPhotos()}</div>
        );
    }

    renderPhotos() {
        return this.props.photos.map((photo, index) => {
            return (
                <Photo
                    key={index}
                    photo={photo}
                />
            );
        });
    }
}

export default PhotoList;
