import React from 'react';
import { renderElapsedString } from '../utils/helpers';
import EditableTimer from './EditableTimer';
const EditableTimerList = ({ timers, onFormSubmit, onStartClick }) => {
  const timerList = timers.map((timer, indx, arr) => {
    return (
      <EditableTimer
        title={timer.title}
        project={timer.project}
        runningSince={timer.runningSince}
        elapsed={timer.elapsed}
        id={timer.id}
        key={timer.id}
        onFormSubmit={onFormSubmit}
        onStartClick={onStartClick}
      />
    );
  });
  return <div>{timerList}</div>;
};

export default EditableTimerList;
