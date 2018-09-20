import React, { Component } from 'react';
import TimerDashboard from './components/TimerDashboard';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1 style={{textAlign: 'center', marginTop: '3em'}}>Time Tracking Todo</h1>
        <hr style={{width: '350px'}} />
        <TimerDashboard />
      </div>
    );
  }
}

export default App;
