import * as actionsCreators from '../actions';
import { START_APP } from '../actions/start-app';
import { mockWebSocket } from '../../io';

const runSocket = mockWebSocket();

export const websocketMiddleware = store => next => action => {
  const state = store.getState();
  switch (action.type) {
    case START_APP: {
        const socket = runSocket('http://server');
        socket.onMessage = (data) => {
            store.dispatch(actionsCreators.websocketMessage(data));
        }
        return next(action);
      }
    default: return next(action);
  }
};