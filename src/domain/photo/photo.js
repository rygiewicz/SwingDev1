import Immutable from 'immutable';

const PhotoRecord = Immutable.Record({
    author: '?',
    date: new Date(0),
    description: '?'
});

export default PhotoRecord;