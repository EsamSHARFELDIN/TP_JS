import React from 'react';
import ImageDetails from './imageDetails.jsx';
import ImageWall from './imageWall.jsx';

import '../assets/style/murImages.css';

import dataImages from '../data/dataImages.js';

/*
  define root component
*/
export default class ImageApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image : "../images/image5.jpg",
                      texte : "la plus belle...",
                      filterText : ''};
        this.imageChanged = this.imageChanged.bind(this);
        this.filterChanged = this.filterChanged.bind(this);
    }

    imageChanged(newImage, newTexte) {
        this.setState({image : newImage, texte : newTexte});
    }

    filterChanged(newFilterText) {
        this.setState({filterText : newFilterText});
    }

    render() {
        return (
            <div>
                <ImageWall
                    images={dataImages}
                    imageChanged={this.imageChanged}
                    filterText={this.state.filterText}
                />
                <ImageDetails
                    image={this.state.image}
                    texte={this.state.texte}
                    filterChanged={this.filterChanged}
                />
            </div>
        );
    }
}
