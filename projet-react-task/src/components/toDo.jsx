import React from 'react';
import PropTypes from 'prop-types';

import Task from './task.jsx';

import '../assets/style/tasklist.css';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterValue: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({filterValue: event.target.value});
    }

    render() {
        const taskList = [...this.props.toDoList]
              .filter(task => task.description.toLowerCase().includes(this.state.filterValue.toLowerCase()))
              .sort((taskA, taskB) => taskB.priority - taskA.priority);

        const taskComponentsList = taskList.map(task =>
            <Task
                {...task}
                key={task.id}
                changePriority={this.props.changePriority}
                makeTaskDone={this.props.makeTaskDone}
            />
        );
        const nbTask = taskList.length;
        const totalDuration = taskList.reduce((acc, task) =>
            acc + task.duration, 0
        );

        return (
            <div className="toDo tasklist">
                <h3>Tâches à faire</h3>
                <input
                    type="text" placeholder="filtre"
                    value={this.state.filterValue}
                    onChange={this.handleChange}
                />
                <div>Il y a {nbTask} tâches en cours, pour une durée de {totalDuration} minutes.</div>
                {taskComponentsList}
            </div>
        );
    }

    static propTypes = {
        toDoList: PropTypes.array.isRequired,
        changePriority: PropTypes.func.isRequired,
        makeTaskDone: PropTypes.func.isRequired
    }
}
