import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { getMessages } from '../actions';
import { bindActionCreators } from 'redux';


class MessageList extends Component {


  componentDidMount() {
    setInterval(this.props.getMessages, 5000);
    // this.props.messages.scrollHeight = scrollTop;
  };

  componentWillUnMount() {
    clearInterval();
  };

  render() {
    console.log(this.props)
    return (
      <div className="">
        {this.props.messages.messages.map((message) => <Message message={message} key={message.created_at} />)}
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
