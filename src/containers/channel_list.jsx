import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, getMessages } from '../actions';

class ChannelList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.getMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel)
  };

  render() {
    return (
      <div className="channels-container">
        <ul>
          {
            this.props.channels.map((channel, key) => {
              return <li 
              className={channel === this.props.selectedChannel ? 'active' : null }
              key={key} 
              onClick={() => this.handleClick(channel)}
              >
                #{channel}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, getMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    channels: state.channels
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
