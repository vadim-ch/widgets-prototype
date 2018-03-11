import * as actionsCreators from '../actions';
import { WEBSOCKET_MESSAGE } from '../actions/websocket-message';

export const availableMiddleware = store => next => action => {
  const state = store.getState();
  switch (action.type) {
    case WEBSOCKET_MESSAGE: {
        if (action.payload.type === 'available') {
            store.dispatch(actionsCreators.setAvailable(action.payload.data));
            break;
        }
        return next(action);
      }
    default: return next(action);
  }
};