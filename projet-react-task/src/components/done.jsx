import React from 'react';
import PropTypes, { array, bool } from 'prop-types';

import DoneTask from './doneTask.jsx';

import '../assets/style/tasklist.css';

export default class Done extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showList: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({showList: !prevState.showList}));
    }

    render() {
        const doneTaskComponentsList = this.state.showList ?
              // cas où on veut afficher la liste
              this.props.doneList.map(task =>
                  <DoneTask
                      {...task}
                      key={task.id}
                  />
              )
        //cas où on ne veut pas afficher la liste
              : null;
        return (
            <div className="done tasklist">
                <h3>Tâches terminées</h3>
                <button
                    onClick={this.handleClick}>
                    {this.state.showList ? "-" : `+(${this.props.doneList.length})`}
                </button>
                {doneTaskComponentsList}
            </div>
        );
    }

    static propTypes = {
        doneList: PropTypes.array.isRequired
    }
}
