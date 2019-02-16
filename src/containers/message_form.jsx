import React, { Component } from 'react';
import { postMessages } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: 'comment..',
      author: 'name..'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    this.props.postMessages(this.state.author, this.state.comment);
    console.log('current state', this.props.messages)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Author:        
          <textarea value={this.state.author} name='author'onChange={this.handleChange} />     
          Comment:    
          <textarea value={this.state.comment} name='comment' onChange={this.handleChange} />
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


