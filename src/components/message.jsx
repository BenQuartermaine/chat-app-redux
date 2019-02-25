import React, { Component } from 'react';

class Message extends Component {
  render(props) {
      const { author, content, channel, created_at } = this.props.message;
      const time = new Date(created_at).toLocaleTimeString();

    return (
      <div className="message-container">
        <i className="author">
          <span>{author}</span>
          <small>{time}</small> 
        </i>
        <p>{content}</p>
      </div>
    );
  }
}

export default Message;
