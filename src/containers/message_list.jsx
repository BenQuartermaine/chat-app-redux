import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from './message_form';
import { getMessages } from '../actions';
import { bindActionCreators } from 'redux';


class MessageList extends Component {
  componentWillMount() {
    this.getMessages(this.props.selectedChannel);
  }
  componentWillMount() {
    this.refresher = setInterval(this.getMessages, 5000);
  };

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  };
  
  componentWillUnMount() {
    clearInterval(this.refresher);
  };

  getMessages = () => {
    this.props.getMessages(this.props.selectedChannel);
  };

  render() {
    const message = 'No messages to display, be the first to drop some love';
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className='channel-content' ref={(list) => { this.list = list; }}>
          {
          this.props.messages.length === 0 ? message : 
            this.props.messages.map((message, i) => {
              return <Message message={message} key={message.id} />;
            })
          }
        </div>
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
    messages: state.messages,
    selectedChannel: state.selectedChannel
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
