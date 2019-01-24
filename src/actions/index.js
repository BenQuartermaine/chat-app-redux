import tempMessage from '../messages';

export function getMessages() {
  return fetch('https://wagon-chat.herokuapp.com/general/messages')
  .then(response => response.json())
  .then((data) => {
    return {
      type: 'GET_MESSAGES',
      payload: data
    };
  })
}

export function postMessages(author, comment) {
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  const body = { author: author, content: comment };

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ author: author, content: comment })
  }).then(response => {
      response.json()
      console.log('this is JSON', response.json());
      debugger
    });
  return {
    type: 'POST_MESSAGES',
    payload: promise
  };
  getMessages();
}
