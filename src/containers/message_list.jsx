import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { getMessages } from '../actions';
import { bindActionCreators } from 'redux';


class MessageList extends Component {
  componentWillMount() {
    console.log("MESSAGE LIST COMP DID MOUNT")
    setInterval(this.props.getMessages,5000);
    // this.props.messages.scrollHeight = scrollTop;
  };

  componentWillUnMount() {
    clearInterval();
  };

  render() {
    console.log(this.props.messages)
    return (
      <div className="">
        {
          Object
            .keys(this.props.messages)
            .map((message, i) => <Message content={message.content} author={message.author} created_at={message.created_at} key={i} />)
        }
      </div>
    );
  }
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages: getMessages },
    dispatch
  );
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
