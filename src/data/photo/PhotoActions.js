import PhotoActionTypes from './PhotoActionTypes';
import PhotoDispatcher from './PhotoDispatcher';
import PhotoRecord from "../../domain/photo/Photo";
import Immutable from "immutable";

const photos = Immutable.List([
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

const PhotoActions = {
    getPhotos() {
        dispatch(PhotoActionTypes.PHOTOS_LOADING);
        setTimeout(this.photosReceived, 2000);
    },

    photosReceived() {
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