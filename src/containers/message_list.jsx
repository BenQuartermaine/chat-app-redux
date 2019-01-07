import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message'
// import { bindActionCreators } from 'redux';

class MessageList extends Component {
  render() {
    return (
      this.props.tempMessage.map((message) => <Message message={message} key={message.author} />)
    );
  }
}

export default MessageList;
