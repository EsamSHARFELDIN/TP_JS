import React from 'react';

import ToDo from './toDo.jsx';
import Done from './done.jsx';
import AddTask from './addTask.jsx';

import '../assets/style/taskApp.css';

import tasksData from '../data/tasksData.js';

const DEFAULT_PRIORITY = 1;

/*
  define root component
*/
export default class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toDoList: [], doneList: []};
        this.changePriority = this.changePriority.bind(this);
        this.makeTaskDone = this.makeTaskDone.bind(this);
        this.addTask = this.addTask.bind(this);
        this.saveToDoList = this.saveToDoList.bind(this);
        this.saveDoneList = this.saveDoneList.bind(this);
    }

    componentDidMount() {
        this.setState({
            toDoList: this.loadToDoList(),
            doneList: this.loadDoneList()
        });
    }

    saveToDoList() {
        localStorage.setItem("toDoList", JSON.stringify(this.state.toDoList));
    }

    saveDoneList() {
        localStorage.setItem("doneList", JSON.stringify(this.state.doneList));
    }

    loadToDoList() {
        const toDoListJson = localStorage.getItem("toDoList");
        if (toDoListJson === null) {
            return [];
        } else {
            return JSON.parse(toDoListJson);
        }
    }

    loadDoneList() {
        const doneListJson = localStorage.getItem("doneList");
        if(doneListJson === null) {
            return [];
        } else {
            return JSON.parse(doneListJson);
        }
    }

    changePriority(idTask, newPriority) {
        this.setState(prevState => {
            const task = prevState.toDoList.find(t => t.id === idTask);
            task.priority = newPriority;
            return {toDoList: prevState.toDoList};
        }, () => this.saveToDoList());
    }

    makeTaskDone(idTask) {
        this.setState(prevState => {
            const task = prevState.toDoList.find(t => t.id === idTask);
            return {toDoList: prevState.toDoList.filter(t => t.id !== idTask),
                    doneList: [...prevState.doneList, task]};
        }, () => {
            this.saveToDoList();
            this.saveDoneList();
        });
    }

    addTask(desc, duration) {
        const newId = `T${this.state.toDoList.length + this.state.doneList.length + 1}`;
        const newTask = {
            description: desc,
            duration: duration,
            priority: DEFAULT_PRIORITY,
            id: newId
        };
        this.setState(prevState => ({toDoList: [...prevState.toDoList, newTask]}),
                      () => this.saveToDoList());
    }

    render() {
        return (
            <div className="taskApp">
                <AddTask
                    addTask={this.addTask}
                />
                <ToDo
                    toDoList={this.state.toDoList}
                    changePriority={this.changePriority}
                    makeTaskDone={this.makeTaskDone}
                />
                <Done
                    doneList={this.state.doneList}
                />
            </div>
        );
    }
}
