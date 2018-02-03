import React, {Component} from 'react';
import {Container} from 'flux/utils';

import PhotoList from './PhotoList';

import PhotoStore from "../../data/photo/PhotoStore";
import PhotoActions from '../../data/photo/PhotoActions';

class PhotoIndex extends Component {
    static getStores() {
        return [
            PhotoStore,
        ];
    }

    static calculateState() {
        return {
            photos: PhotoStore.getState(),
        };
    }

    componentDidMount() {
        PhotoActions.getPhotos();
    }

    render() {
        return (
            <div id="photo-index">
                <PhotoList
                    photos={this.state.photos.photos}
                    loading={this.state.photos.loading}
                />
            </div>
        );
    }
}

export default Container.create(PhotoIndex);
