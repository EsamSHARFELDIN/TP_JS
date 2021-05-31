import React from 'react';

export default class DoneTask extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task done">
                <div className="info">{`${this.props.description} (${this.props.duration} mn) (priorité : ${this.props.priority})`}</div>
            </div>
        );
    }
}
