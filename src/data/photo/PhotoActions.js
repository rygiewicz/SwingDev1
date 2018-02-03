import PhotoActionTypes from './PhotoActionTypes';
import PhotoDispatcher from './PhotoDispatcher';
import PhotoRecord from "../../domain/photo/Photo";
import Immutable from "immutable";
import axios from 'axios';
import Logger from '../../helper/Logger';

const API_KEY = '37ae86d629a2e4a62917253419cb9e94'; // this should not be public in real-world applications

const PhotoActions = {
    getPhotos() {
        dispatch(PhotoActionTypes.PHOTOS_LOADING);
        fetchPhotos().then(this.photosReceived).catch(error => {
            //TODO: fire error action
            Logger.error(error);
        });
    },

    photosReceived(photos) {
        dispatch(PhotoActionTypes.PHOTOS_RECEIVED, {photos: photos});
    }
};

export default PhotoActions;

function dispatch(type, data) {
    PhotoDispatcher.dispatch({
        type: type,
        ...data
    });
}

function fetchPhotos() {
    const searchUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=dogs
    &format=json&nojsoncallback=1&per_page=100`;

    return axios.get(searchUrl).then(response => {
        return response.data.photos.photo.reduce((list, photo) => {
            return list.push(newPhoto(photo));
        }, Immutable.List());
    });
}

function newPhoto(photo) {
    try {
        return new PhotoRecord({
            url: getPhotoUrl(photo),
            error: false
        });
    } catch (error) {
        Logger.error(error);
        return new PhotoRecord();
    }
}

function getPhotoUrl(photo) {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`;
}