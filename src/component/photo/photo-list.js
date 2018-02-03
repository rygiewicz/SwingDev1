import React, {Component} from 'react';
import Immutable from 'immutable';

import Photo from './photo';

import PhotoRecord from '../../domain/photo/photo';

class PhotoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photos: mockPhotos()
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

function mockPhotos() {
    return Immutable.List([
        new PhotoRecord({
            author: 'photo1',
            date: new Date('2001-12-10'),
            description: 'photo1 description'
        }),
        new PhotoRecord({
            author: 'photo2',
            date: new Date('2008-05-17'),
            description: 'photo2 description'
        }),
        new PhotoRecord({
            author: 'photo3',
            date: new Date('1997-02-23'),
            description: 'photo3 description'
        })
    ]);
}