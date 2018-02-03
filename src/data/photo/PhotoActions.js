import PhotoActionTypes from './PhotoActionTypes';
import PhotoDispatcher from './PhotoDispatcher';

const PhotoActions = {
    getPhotos() {
        dispatch(PhotoActionTypes.PHOTOS_LOADING);
        setTimeout(this.photosReceived, 2000);
    },

    photosReceived() {
        dispatch(PhotoActionTypes.PHOTOS_RECEIVED);
    }
};

export default PhotoActions;

function dispatch(type) {
    PhotoDispatcher.dispatch({
        type: type
    });
}