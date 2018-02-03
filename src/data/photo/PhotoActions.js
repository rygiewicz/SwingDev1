import PhotoActionTypes from './PhotoActionTypes';
import PhotoDispatcher from './PhotoDispatcher';

const PhotoActions = {
    getPhotos() {
        PhotoDispatcher.dispatch({
            type: PhotoActionTypes.GET_PHOTOS
        });
    }
};

export default PhotoActions;