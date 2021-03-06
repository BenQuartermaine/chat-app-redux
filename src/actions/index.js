export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGES = 'POST_MESSAGES';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

export function getMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`  
  const promise = fetch(url).then(response => response.json())

   return {
    type: GET_MESSAGES,
    payload: promise
  };
}

export function postMessages(selectedChannel,author, content) {
  const url = `https://wagon-chat.herokuapp.com/${selectedChannel}/messages` ;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())

  return {
    type: POST_MESSAGES,
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  }
}

