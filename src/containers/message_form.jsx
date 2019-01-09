import React, { Component } from 'react';
import { postMessages } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Comment away...'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('An essay was submitted: ' + this.state.value);
    debugger
    this.props.postMessages(this.state.value)
    debugger
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { postMessages: postMessages },
    dispatch
  );
}
function mapStateToProps(state) {
  // console.log("yes",this.props.messagesReducer)
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);


