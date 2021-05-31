import React from 'react';
import PropTypes from 'prop-types';

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

    static propTypes = {
        description: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        priority: PropTypes.number.isRequired
    }
}
