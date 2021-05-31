import React from 'react';

import PriorityLevel from './priorityLevel.jsx';

import '../assets/style/priorityScale.css';

export default class PriorityScale extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const six = [1, 2, 3, 4, 5, 6];
        const levelsList = six.map(level =>
            <PriorityLevel
                on={(level <= this.props.priority)}
                key={level}
                taskId={this.props.taskId}
                level={level}
                changePriority={this.props.changePriority}
            />
        );

        return (
            <div className="priorityScale">
                {levelsList}
                <span>({this.props.priority})</span>
            </div>
        );
    }
}
