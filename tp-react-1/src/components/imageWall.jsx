import React from 'react';

export default class ImageWall extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imagesComponents = this.props.images.filter(data =>
            data.texte.toLowerCase().includes(this.props.filterText.toLowerCase())
        ).map(data =>
            <img
                src={data.image}
                alt={data.texte}
                title={data.texte}
                key={data.image}
                onMouseOver={() => this.props.imageChanged(data.image, data.texte)}
            />
        );
        return (
            <div id="mur">
                {imagesComponents}
            </div>
        );
    }
}
