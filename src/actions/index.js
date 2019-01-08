// TODO: add and export your own actions
export function getMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
  .then(response => response.json())

  return {
    type: 'GET_MESSAGES',
    payload: promise
  }
}

