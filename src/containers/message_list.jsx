import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { getMessages } from '../actions';
import { bindActionCreators } from 'redux';


class MessageList extends Component {
  componentWillMount() {
    this.props.getMessages();
  }
  render() {
    return (
      <div className="">
        {this.props.messages.map((message) => <Message message={message} key={message.content} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages: getMessages },
    dispatch
  );
}
function mapStateToProps(state) {
  // console.log("yes",this.props.messagesReducer)
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
