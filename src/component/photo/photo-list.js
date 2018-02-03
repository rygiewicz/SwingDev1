import React, {Component} from 'react';

class PhotoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photos: [
                'photo1',
                'photo2',
                'photo3'
            ]
        };
    }

    render() {
        return (
            <div id="photo-list">{this.renderPhotos()}</div>
        );
    }

    renderPhotos() {
        return this.state.photos.map((photo, index) => {
            return (
                <div key={index}>{photo}</div>
            );
        });
    }
}

export default PhotoList;