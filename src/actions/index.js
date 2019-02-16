import tempMessage from '../messages';

export function getMessages() {
  console.log('firing get messages')
  return fetch('https://wagon-chat.herokuapp.com/general/messages')
  .then(response => response.json())
  .then((data) => {
    console.log('data', data)
    return {
      type: 'GET_MESSAGES',
      payload: data
    };
  })
}

export function postMessages(author, comment) {
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  const body = { author: author, content: comment };

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then((data) => {

    return {
      type: 'POST_MESSAGES',
      payload: data
    }
  })
  this.getMessages();
  console.log('getmessages fired');
}
