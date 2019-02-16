import React, { Component } from 'react';
import MessageList from './message_list';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';

class Message extends Component {
  render() {
    return(
      <div className="message">
        <div className="message-name">
          <p>{this.props.messages.author}</p>
        </div>
        <div className="message-body">
          <p>HEYYY{this.props.messages.content}</p>
        </div>
        <div className="message-status">
          <p className="status pending">{this.props.messages.created_at}</p>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return({
    messages: state.messages
  })
}

export default connect(mapStateToProps)(Message);


