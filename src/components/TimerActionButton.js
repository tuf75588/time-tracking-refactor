import React from 'react';

const TimerActionButton = ({ timerIsRunning, startTimer, onStartClick }) => {
  if (timerIsRunning) {
    return <div className="ui bottom attached red basic button">Stop</div>;
  } else {
    return (
      <div
        className="ui bottom attached green basic button"
        onClick={onStartClick}
      >
        Start
      </div>
    );
  }
};

export default TimerActionButton;
