import React from 'react';
import PhotoRecord from "../../domain/photo/Photo";
import Immutable from "immutable";
import {Container} from 'flux/utils';

import PhotoList from './PhotoList';

import PhotoStore from "../../data/photo/PhotoStore";

function getStores() {
    return [
        PhotoStore,
    ];
}

function getState() {
    return {
        photos: mockPhotos(),
    };
}

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

export default Container.createFunctional(PhotoList, getStores, getState);
