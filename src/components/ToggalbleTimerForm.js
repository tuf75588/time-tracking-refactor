import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import TimerForm from './TimerForm';
class ToggalbleTimerForm extends Component {
  state = {
    isOpen: false
  };
  handleOpen = () => {
    this.setState(() => ({
      isOpen: true
    }));
  };
  handleClose = () => {
    this.setState(() => ({
      isOpen: false
    }));
  };
  render() {
    const { isOpen } = this.state;
    if (isOpen) {
      return <TimerForm onClose={this.handleClose} />;
    } else {
      return (
        <div className="toggleTimer" onClick={this.handleOpen}>
          <Icon name="plus square outline" size="big" />
        </div>
      );
    }
  }
}

export default ToggalbleTimerForm;
