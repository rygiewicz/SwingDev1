import {ReduceStore} from 'flux/utils';
import PhotoDispatcher from './PhotoDispatcher'
import Immutable from 'immutable';
import PhotoActionTypes from './PhotoActionTypes';

const PhotosState = Immutable.Record({
    photos: Immutable.List(),
    loading: false
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
            case PhotoActionTypes.PHOTOS_LOADING:
                return state.set('loading', true);

            case PhotoActionTypes.PHOTOS_RECEIVED:
                return state.set('loading', false).update('photos', photos => photos.concat(action.photos));

            default:
                return state;
        }
    }
}

export default new PhotoStore();
