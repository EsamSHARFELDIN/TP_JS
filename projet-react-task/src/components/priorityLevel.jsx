import React from 'react';
import PropTypes from 'prop-types';

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

    static propTypes = {
        on: PropTypes.bool.isRequired,
        level: PropTypes.number.isRequired,
        taskId: PropTypes.string.isRequired,
        changePriority: PropTypes.func.isRequired,
    }
}
