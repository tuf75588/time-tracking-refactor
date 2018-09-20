import React, { Component } from 'react';

class TimerForm extends Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };
  render() {
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input type="text" />
            </div>
            <div className="field">
              <label>Project</label>
              <input type="text" />
            </div>
            <div className="ui two bottom attached buttons">
              <button className="ui basic blue button">hello</button>
              <button className="ui basic red button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;