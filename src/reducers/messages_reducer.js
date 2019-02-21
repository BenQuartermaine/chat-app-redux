import { GET_MESSAGES, POST_MESSAGES, SELECT_CHANNEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case GET_MESSAGES:
        return action.payload.messages;
    case POST_MESSAGES:
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}
