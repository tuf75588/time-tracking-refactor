import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import TimerActionButton from './TimerActionButton';
import { renderElapsedString } from '../utils/helpers';
class Timer extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }
  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };
  render() {
    const {
      title,
      project,
      runningSince,
      elapsed,
      handleEdit,
      startTimer,
      id
    } = this.props;
    const renderElapsedStringVal = renderElapsedString(elapsed, runningSince);
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{project}</div>
          <div className="center aligned description">
            <h2>{renderElapsedStringVal}</h2>
          </div>
          <div className="extra content">
            <span
              className="right floated edit icon"
              style={{ cursor: 'pointer' }}
              onClick={this.props.onEditClick}
            >
              <i className="edit icon" />
            </span>
            <span className="right floated trash icon">
              <i className="trash icon" />
            </span>
          </div>
        </div>
        <TimerActionButton
          isRunning={false}
          onStartClick={this.handleStartClick}
          timerIsRunning={!!this.props.runningSince}
        />
      </div>
    );
  }
}

export default Timer;
