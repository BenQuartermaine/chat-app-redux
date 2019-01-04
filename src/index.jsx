// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// Importing reducers
// import messagesReducer from './messages_reducer';
// import channelsReducer from './channels_reducer';
// import currentUserReducer from './current_user_reducer';
// import selectedChannelReducer from './selected_channel_reducer';

// Reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer,
  selectedChannel: selectedChannelReducer
});

// Setting initial state
const initialState = {
  messages: [],
  channels: ['#all', '#work', '#general'],
  currentUser: prompt('Enter your username please') || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: '#all'
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