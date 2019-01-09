import tempMessage from '../messages';

// TODO: add and export your own actions
export function getMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
  .then(response => response.json())

  return {
    type: 'GET_MESSAGES',
    payload: promise
  }
}

export function postMessages(event) {
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  const body = { author: 'hey', content: "no" };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  console.log(promise)

  debugger

  return {
    type: 'POST_MESSAGES',
    payload: promise
  }
}

