export const RECEIVE_HISTORY = 'receive-history';

export const receiveHistory = payload => {
  return {
    type: RECEIVE_HISTORY,
    payload
  };
};