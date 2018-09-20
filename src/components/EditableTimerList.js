import React from 'react';
import EditableTimer from './EditableTimer';
import { renderElapsedString } from '../utils/helpers'
const EditableTimerList = ({ timers }) => {
    const timerList = timers.map((timer, indx, arr) => {
        return (
            <EditableTimer 
                title={timer.title}
                project={timer.project}
                runningSince={timer.runningSince}
                elapsed={renderElapsedString(timer.elapsed)}
            />
        )
    })
    return (
        <div>
           {timerList}
        </div>
    );
};

export default EditableTimerList;