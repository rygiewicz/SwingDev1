import PhotoActionTypes from './PhotoActionTypes';
import PhotoDispatcher from './PhotoDispatcher';
import PhotoRecord from "../../domain/photo/Photo";
import Immutable from "immutable";
import axios from 'axios';
import Logger from '../../helper/Logger';

const API_KEY = '37ae86d629a2e4a62917253419cb9e94'; // this should not be public in real-world applications

const PhotoActions = {
    getPhotos() {
        fetchPhotos().then(this.photosReceived).catch(error => {
            //TODO: fire error action
            Logger.error(error);
        });
    },

    photosReceived(photos) {
        dispatch(PhotoActionTypes.PHOTOS_RECEIVED, {photos});
        updatePhotoInfo(photos);
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
    const searchUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=dogs`
        + `&format=json&nojsoncallback=1&per_page=100`;

    return axios.get(searchUrl).then(response => {
        return response.data.photos.photo.reduce((list, photo) => {
            return list.push(newPhoto(photo));
        }, Immutable.List());
    });
}

function newPhoto(photo) {
    try {
        return new PhotoRecord({
            id: photo.id,
            secret: photo.secret,
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

function updatePhotoInfo(photoList) {
    photoList.forEach(photo => {
        fetchPhotoInfo(photo).then(info => {
            dispatch(PhotoActionTypes.PHOTO_INFO_RECEIVED, {info})
        }).catch(Logger.error);
    });
}

function fetchPhotoInfo(photo) {
    const infoUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY}`
        + `&photo_id=${photo.id}&secret=${photo.secret}&format=json&nojsoncallback=1`;

    return axios.get(infoUrl).then(response => {
        return {
            id: photo.id,
            date: new Date(parseInt(response.data.photo.dates.posted) * 1000),
            author: response.data.photo.owner.username,
            description: response.data.photo.description._content
        };
    });
}
