import React from 'react';

const TimerActionButton = ({ isRunning }) => {
  if (isRunning) {
    return (
      <div className="ui bottom attached red basic button">Stop</div>
    )
  } else {
    return (
      <div className="ui bottom attached green basic button">Start</div>
    )
  }
};

export default TimerActionButton;
