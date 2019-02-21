import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from './message_form';
import { getMessages } from '../actions';
import { bindActionCreators } from 'redux';


class MessageList extends Component {
  componentWillMount() {
    setInterval(this.props.getMessages, 5000);
    // this.props.messages.scrollHeight = scrollTop;
  };

  componentWillUnMount() {
    clearInterval();
  };

  render() {
    return (
      <div className="">
        {
          this.props.messages.map((message, i) => {
            return <Message message={message} key={message.id} />;
          })
        }
        <MessageForm />
      </div>
    );
  }
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
