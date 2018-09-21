import React, { Component } from 'react';

class TimerForm extends Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };
  submitForm = () => {
    this.props.onFormSubmit({
      title: this.state.title,
      project: this.state.project,
      id: this.props.id
    });
  };
  handleTitleChange = (event) =>   {
    const val = event.target.value;
    this.setState(() => ({
      title: val,
    }))
  }
  handleProjectChange = event => {
    const val = event.target.value;
    this.setState(() => ({
      project: val,
    }))
  }
  render() {
    const { title, project, id } = this.props;
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="ui form">
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className="field">
              <label>Project</label>
              <input
                type="text"
                name="project"
                value={this.state.project}
                onChange={this.handleProjectChange}
              />
            </div>
            <div className="ui two bottom attached buttons">
              <button
                className="ui basic blue button"
                onClick={this.submitForm}
              >
                {submitText}
              </button>
              <button
                className="ui basic red button"
                onClick={this.props.onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
