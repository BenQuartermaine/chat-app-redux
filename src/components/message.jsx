import React, { Component } from 'react';
import MessageList from '../containers/message_list';

class Message extends Component {
  render(props) {
    return(
      <div className="message">
        <div className="message-name">
          <p>{this.props.message.content}</p>
        </div>
        <div className="message-body">
          <p>{this.props.message.currentUser}</p>
        </div>
        <div className="message-status">
          <p className="status pending">{this.props.message.selectChannel}</p>
        </div>
      </div>
    );
  }
}

export default Message;
