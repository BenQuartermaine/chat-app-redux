import React, { Component } from 'react';
import { postMessages } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      message: ''
    }
  }

  handleSubmit = event => {
    const author = this.state.author;
    const message = this.state.message;
    this.props.postMessages(author, message);
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
          Author:        
          <textarea placeholder="Name.." name='author' onChange={this.handleChange} />     
          Comment:    
          <textarea placeholder="Speak.." name='message' onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
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
    messages: state.messages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);


