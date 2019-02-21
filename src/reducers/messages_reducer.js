export default function(state, action) {
  if (state === undefined) {
    return {}
  }

  switch (action.type) {
    case 'GET_MESSAGES':
        return action.payload;
    case 'POST_MESSAGES':
      return action.payload;
    default:
      return state;
  }
}