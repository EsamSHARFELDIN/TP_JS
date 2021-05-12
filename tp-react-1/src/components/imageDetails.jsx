import React from 'react';

export default class ImageDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterValue : ''};
        this.filterValueChanged = this.filterValueChanged.bind(this);
    }

    filterValueChanged(event) {
        this.setState({filterValue : event.target.value});
        this.props.filterChanged(event.target.value);
    }

    render() {
        return (
            <div id="details">
                <input
                    id="filtre" type="text" placeholder="filtre image..."
                    value={this.state.filterValue}
                    onChange={this.filterValueChanged}
                />
                <img
                    src={this.props.image}
                    alt={this.props.texte}
                />
                <div className="legende">
                    {this.props.texte}
                </div>
            </div>
        );
    }
}
