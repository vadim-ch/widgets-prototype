import * as actionsCreators from '../actions';
import { isDialogAvailable } from '../reducers/dialog/selectors';
import { isAvailable } from '../reducers/available/selectors';
import { SET_INVITATION } from '../actions/set-invitation';
import { OPEN_FRAME } from "../actions/open-frame";

export const FrameState = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  INVITE: 'invite'
};

export const frameStateMiddleware = store => next => action => {
  switch (action.type) {
    case SET_INVITATION: {
      store.dispatch(actionsCreators.setFrameState(FrameState.INVITE));
      return next(action);
    }
    case OPEN_FRAME:
      // case CLOSE_FRAME:
      const result = next(action);
      const state = store.getState();
      store.dispatch(actionsCreators.setFrameState(
          (isAvailable(state) || (isDialogAvailable(state))) ?
              FrameState.ONLINE :
              FrameState.OFFLINE
      ));
      return result;
    default:
      return next(action);
  }
};