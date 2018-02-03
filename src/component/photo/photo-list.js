import React, {Component} from 'react';
import Immutable from 'immutable';

import Photo from './photo';

import PhotoRecord from '../../domain/photo/photo';

class PhotoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photos: Immutable.List([
                new PhotoRecord({author: 'photo1'}),
                new PhotoRecord({author: 'photo2'}),
                new PhotoRecord({author: 'photo3'})
            ])
        };
    }

    render() {
        return (
            <div id="photo-list">{this.renderPhotos()}</div>
        );
    }

    renderPhotos() {
        return this.state.photos.map((photo, index) => {
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