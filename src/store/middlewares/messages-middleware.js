import * as actionsCreators from '../actions';
import { getHistory } from '../../io';

import { SET_DIALOG } from '../actions/set-dialog';

export const messagesMiddleware = store => next => action => {
  const state = store.getState();
  switch (action.type) {
    case SET_DIALOG: {
        getHistory().then((history) => {
          store.dispatch(actionsCreators.receiveHistory(history));
        })
        return next(action);
      }
    default: return next(action);
  }
};