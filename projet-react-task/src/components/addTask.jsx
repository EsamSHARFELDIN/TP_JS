import React from 'react';

import '../assets/style/addtask.css';

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.descriptionInputRef = React.createRef();
        this.durationInputRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const desc = this.descriptionInputRef.current.value;
        const duration = this.durationInputRef.current.value;
        if (desc && duration) {
            this.props.addTask(desc, parseInt(duration));
            this.descriptionInputRef.current.value = '';
            this.durationInputRef.current.value = '';
        }
    }

    render() {
        return (
            <div className="addTask">
                <input
                    type="text" placeholder="description"
                    ref={this.descriptionInputRef}
                />
                <input
                    type="number" placeholder="durée"
                    ref={this.durationInputRef}
                />
                mn
                <button onClick={this.handleClick}>
                    Ajouter
                </button>
            </div>
        );
    }
}
