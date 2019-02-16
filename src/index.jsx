// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import tempMessage from './messages';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Importing reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import currentUserReducer from './reducers/current_user_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

// Reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer
});


// Setting initial state
// prompt('Enter your username please') ||
const initialState = {
  messages:   tempMessage,
  channels: ['#all', '#work', '#general'],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: '#general'
};

// Middleware constant, placed in the provider
const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
// The empty object (postion 2 in createstore method) allows you to add the initial state from redux
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
