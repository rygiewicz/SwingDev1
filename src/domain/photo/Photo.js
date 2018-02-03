import Immutable from 'immutable';

const PhotoRecord = Immutable.Record({
    id: null,
    secret: null,
    author: null,
    date: null,
    description: null,
    url: null,
    error: true
});

export default PhotoRecord;