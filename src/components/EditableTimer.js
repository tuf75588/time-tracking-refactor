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
  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm
          onClose={this.handleCancelClick}
          title={this.props.title}
          project={this.props.project}
          id={this.props.id}
        />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          onEditClick={this.handleEditClick}
        />
      );
    }
  }
}
export default EditableTimer;