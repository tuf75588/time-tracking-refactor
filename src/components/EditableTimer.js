import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';
class EditableTimer extends Component {
  state = {
    editFormOpen: false
  };
  handleEditClick = () => {
    this.openForm();
  };
  handleCancelClick = () => {
    this.closeForm();
  };
  openForm = () => {
    this.setState(() => ({
      editFormOpen: true
    }));
  };
  closeForm = () => {
    this.setState(() => ({
      editFormOpen: false
    }));
  };

  handleSubmit = timer => {
    this.props.onFormSubmit(timer);
    this.closeForm();
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          onClose={this.handleCancelClick}
          title={this.props.title}
          project={this.props.project}
          id={this.props.id}
          onFormSubmit={this.handleSubmit}
        />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          id={this.props.id}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
          onEditClick={this.handleEditClick}
          onStartClick={this.props.onStartClick}
        />
      );
    }
  }
}
export default EditableTimer;
