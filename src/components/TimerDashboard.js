import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { getId, newTimer } from '../utils/helpers';
import EditableTimerList from './EditableTimerList';
import ToggalbleTimerForm from './ToggalbleTimerForm';

class TimerDashboard extends Component {
  state = {
    timers: [
      {
        title: 'Learn React',
        project: 'Web Domination',
        id: getId(),
        runningSince: Date.now(),
        elapsed: 5456099
      },
      {
        title: 'More React',
        project: 'World Domination',
        id: getId(),
        runningSince: Date.now(),
        elapsed: 5452388
      },
      {
        title: 'Feed The Cat',
        project: 'Good Human',
        id: getId(),
        runningSince: null,
        elapsed: 5456072
      }
    ]
  };
  handleCreateTimer = timer => {
    const t = newTimer(timer);
    this.setState(prevState => ({
      timers: [...prevState.timers, t],
    }))
    
  };
  render() {
    return (
      <div className="ui column centered grid">
        <div className="column box">
          <EditableTimerList timers={this.state.timers} />
          <ToggalbleTimerForm  handleFormSubmit={this.handleCreateTimer} />
        </div>
      </div>
    );
  }
}

export default TimerDashboard;