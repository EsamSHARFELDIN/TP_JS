import React from 'react';

import '../assets/style/taskApp.css';

/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="taskApp">
        Task App
      </div>
    );
  }
}
