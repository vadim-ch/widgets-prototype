export const RECEIVE_MESSAGE = 'receive-message';

export const receiveMessage = payload => {
  return {
    type: RECEIVE_MESSAGE,
    payload
  };
};