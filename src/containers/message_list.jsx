import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';
import { getMessages }from '../actions'
import { bindActionCreators } from 'redux';
// import { bindActionCreators } from 'redux';

class MessageList extends Component {
  componentWillMount() {
    this.props.getMessages();
  }

  render() {
    return (
      this.props.messages.map((message) => <Message message={message} key={message.author} />)
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
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
