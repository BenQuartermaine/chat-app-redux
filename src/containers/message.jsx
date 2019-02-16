import React, { Component } from 'react';
import MessageList from './message_list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMessages } from '../actions';

class Message extends Component {
  componentDidMount() {
    this.props.getMessages
    // this.props.messages.scrollHeight = scrollTop;
  };
  render() {
    return(
      <div className="message">
        <div className="message-name">
          <p>{this.props.messages.author}</p>
        </div>
        <div className="message-body">
          <p>{this.props.messages.content}</p>
        </div>
        <div className="message-status">
          <p className="status pending">{this.props.messages.created_at}</p>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages: getMessages },
    dispatch
  )
}
function mapStateToProps(state) {
  return({
    messages: state.messages
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Message);


