import Immutable from 'immutable';

const PhotoRecord = Immutable.Record({
    id: null,
    author: null,
    date: null,
    description: null,
    url: null,
    error: true
});

export default PhotoRecord;