export default function(state = {}, action) {
  switch (action.type) {
    case 'GET_MESSAGES':
      return action.payload.messages;
    case 'POST_MESSAGES':
      return action.payload;
    default:
      return state;
  }
}