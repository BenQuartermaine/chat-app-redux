import React, { Component } from 'react';
import { postMessages } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: '' 
    }
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleSubmit = event => {
    event.preventDefault();
    const message = this.state.message;
    const currentUser = this.props.currentUser;
    const selectedChannel = this.props.selectedChannel
    this.props.postMessages(selectedChannel,currentUser, message);
    this.setState({ message: '' });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <form className="channel-editor" onSubmit={this.handleSubmit}>
        <input 
          className="form-control"
          type="text"
          name='message'
          autoComplete="off"
          value={this.state.value}
          ref={(input) => { this.messageBox = input; }}
          onChange={this.handleChange} 
        />       
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postMessages }, dispatch);
}
function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);


