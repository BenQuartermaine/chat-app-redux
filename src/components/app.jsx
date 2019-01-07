import React from 'react';
import MessageList from '../containers/message_list';
import tempMessage from '../messages'

const App = () => {
 return (
    <div className="app">
      <MessageList tempMessage={tempMessage} />
    </div>
  );
};

export default App;
