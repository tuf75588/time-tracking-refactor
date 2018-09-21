import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import TimerActionButton from './TimerActionButton';

class Timer extends Component {
  render() {
    const { title, project, elapsed, handleEdit } = this.props;
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{project}</div>
          <div className="center aligned description">
            <h2>{elapsed}</h2>
          </div>
          <div className="extra content">
            <span className="right floated edit icon" style={{cursor: 'pointer'}} onClick={this.props.onEditClick}>
              <i className="edit icon" />
            </span>
            <span className="right floated trash icon">
              <i className="trash icon" />
            </span>
          </div>
        </div>
        <TimerActionButton isRunning={false} />
      </div>
    );
  }
}

export default Timer;
