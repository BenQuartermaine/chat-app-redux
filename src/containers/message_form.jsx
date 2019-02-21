import React, { Component } from 'react';
import { postMessages } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      message: '' 
    }
  }

  handleSubmit = event => {
    const message = this.state.message;
    const currentUser = this.props.currentUser
    this.props.postMessages(currentUser, message);
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>       
          <textarea placeholder="Speak.." name='message' onChange={this.handleChange} />
        </label>
        <button className="button" placeholder="HELLO" type="submit" value="Submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { postMessages: postMessages },
    dispatch
  );
}
function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);


