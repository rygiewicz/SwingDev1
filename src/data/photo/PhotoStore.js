import {ReduceStore} from 'flux/utils';
import PhotoDispatcher from './PhotoDispatcher'
import Immutable from 'immutable';
import PhotoActionTypes from './PhotoActionTypes';

const PhotosState = Immutable.Record({
    photos: Immutable.List(),
    hasMore: true,
    loading: false,
    error: false
});

class PhotoStore extends ReduceStore {
    constructor() {
        super(PhotoDispatcher);
    }

    getInitialState() {
        return new PhotosState();
    }

    reduce(state, action) {
        switch (action.type) {

            case PhotoActionTypes.LOADING_STARTED:
                return state.set('hasMore', false).set('error', false).set('loading', true);

            case PhotoActionTypes.LOADING_ERROR:
                return state.set('error', true).set('loading', false);

            case PhotoActionTypes.PHOTOS_RECEIVED:
                return state.set('loading', false).update('photos', photos => photos.concat(action.photos))
                    .set('hasMore', action.photos.count() === 100);

            case PhotoActionTypes.PHOTO_INFO_RECEIVED:
                return state.update('photos', photos => photos.map(photo => {
                    if (action.info.id !== photo.id) {
                        return photo;
                    }

                    return photo.set('author', action.info.author).set('date', action.info.date)
                        .set('description', action.info.description);
                }));

            default:
                return state;
        }
    }
}

export default new PhotoStore();
