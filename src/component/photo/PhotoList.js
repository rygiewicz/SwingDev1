import React from 'react';
import PropTypes from 'prop-types';
import Immutable from "immutable";
import InfiniteScroll from 'react-infinite-scroller';

import Photo from './Photo';
import PhotoActions from "../../data/photo/PhotoActions";

function PhotoList(props) {
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            loader={<div className="loader" key={0}/>}
        >
            <PhotoListPhotos {...props}/>
        </InfiniteScroll>
    );
}

function PhotoListPhotos(props) {
    if (!props.photos.count()) {
        return null;
    }

    return (
        <div id="photo-list">
            {
                props.photos.map((photo, index) =>
                    (
                        <Photo
                            key={index}
                            photo={photo}
                        />
                    )
                )
            }
        </div>
    );
}

PhotoList.propTypes = {
    photos: PropTypes.instanceOf(Immutable.List)
};

export default PhotoList;

function loadFunc(page) {
    if (page !== 1) {
        return;
    }

    PhotoActions.getPhotos();
}