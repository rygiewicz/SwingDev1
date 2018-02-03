import React from 'react';
import PhotoRecord from "../../domain/photo/Photo";
import Immutable from "immutable";

import PhotoList from './PhotoList';

const PhotoIndex = () => {
    return (
        <div id="photo-index">
            <PhotoList photos={mockPhotos()}/>
        </div>
    );
};

export default PhotoIndex;

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
