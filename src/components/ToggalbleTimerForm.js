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
  handleFormSubmit = (timer) => {
    this.props.handleFormSubmit(timer);
    this.setState(() => ({
      isOpen: false,
    }))
  }
  render() {
    const { handleFormSubmit } = this.props;
    const { isOpen } = this.state;
    console.log(this.props)
    if (isOpen) {
      return <TimerForm onClose={this.handleClose} onFormSubmit={this.handleFormSubmit} />;
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
