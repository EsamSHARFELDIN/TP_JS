import React from 'react';

import '../assets/style/priorityLevel.css';

export default class PriorityLevel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.changePriority(this.props.taskId, this.props.level);
    }

    render() {
        const classes = `priorityLevel ${(this.props.on ? "on" : "off")}`;
        return (
            <div
                className={classes}
                onClick={this.handleClick}
            >
            </div>
        );
    }
}
