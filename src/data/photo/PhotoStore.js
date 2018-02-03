import {ReduceStore} from 'flux/utils';
import PhotoDispatcher from './PhotoDispatcher'
import Immutable from 'immutable';
import PhotoActionTypes from './PhotoActionTypes';

class PhotoStore extends ReduceStore {
    constructor() {
        super(PhotoDispatcher);
    }

    getInitialState() {
        return Immutable.List();
    }

    reduce(state, action) {
        switch (action.type) {
            case PhotoActionTypes.PHOTOS_RECEIVED:
                return state.concat(action.photos);
            default:
                return state;
        }
    }
}

export default new PhotoStore();
