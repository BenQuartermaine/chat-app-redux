import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';
import ChannelList from '../containers/channel_list';
import Message from '../containers/message';

const App = () => {
 return (
    <div className="app">
      <MessageForm />
      <Message />
    </div>
  );
};

export default App;
