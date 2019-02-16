import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { getMessages } from '../actions';
import { bindActionCreators } from 'redux';


class MessageList extends Component {
  constructor(props) {
    super(props);
    // this.props.messages = React.createRef();
  }


  // componentDidMount() {
  //   setInterval(this.props.getMessages, 5000);
  //   // this.props.messages.scrollHeight = scrollTop;
  // };

  // componentWillUnMount() {
  //   clearInterval();
  // };

  render() {
    return (
         <div className="">
         <p>{this.props.messages.content}</p>
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
