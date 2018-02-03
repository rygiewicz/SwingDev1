import React, {Component} from 'react';
import {Container} from 'flux/utils';

import PhotoList from './PhotoList';

import PhotoStore from "../../data/photo/PhotoStore";

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

    render() {
        return (
            <div id="photo-index">
                <PhotoList photos={this.state.photos}/>
            </div>
        );
    }
}

export default Container.create(PhotoIndex);
