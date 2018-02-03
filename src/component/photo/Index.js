import React from 'react';
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
        photos: PhotoStore.getState(),
    };
}

export default Container.createFunctional(PhotoList, getStores, getState);
