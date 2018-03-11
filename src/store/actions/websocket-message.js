export const WEBSOCKET_MESSAGE = 'websocket-message';

export const websocketMessage = (payload) => {
  return {
    type: WEBSOCKET_MESSAGE,
    payload
  };
};