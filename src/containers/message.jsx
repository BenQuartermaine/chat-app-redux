import React, { Component } from 'react';
import MessageList from './message_list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Message extends Component {
  render() {
    console.log(this.props)
    return(
      <div className="message">
        <div className="message-name">
          <p>{this.props.content}</p>
        </div>
        <div className="message-body">
          <p>{this.props.author}</p>
        </div>
        <div className="message-status">
          <p className="status pending">{this.props.created_at}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return({ messages: state.messages })
}

export default connect(mapStateToProps)(Message);
