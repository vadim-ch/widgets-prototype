import * as actionsCreators from '../actions';
import { START_DIALOG } from '../actions/start-dialog';
import { getDialog, getGroups } from '../../io';
import { getSettings } from '../reducers/settings/selectors';
import { isDialogAvailable } from '../reducers/dialog/selectors';
import { isOneGroup } from '../reducers/groups/selectors';
import { GO_TO_DIALOG } from '../actions/got-to-dialog';
import { isAvailable } from '../reducers/available/selectors';
import { SET_DIALOG } from '../actions/set-dialog';
import { isOpenedFrame } from '../reducers/application/selectors';
import { SET_AVAILABLE } from '../actions/set-available';
import { SET_GROUPS } from '../actions/set-groups';
import { SET_INVITATION } from '../actions/set-invitation';

export const FrameState = {
  UNKNOWN: 'unknown',
  ONLINE: 'online',
  OFFLINE: 'offline',
  INVITE: 'invite'
}

export const viewStateMiddleware = store => next => action => {
  switch (action.type) {
    case START_DIALOG: {
      const state = store.getState();
      const isAvailableChat = isAvailable(state);
      if (isAvailableChat) {
        store.dispatch(actionsCreators.setFrameState(FrameState.UNKNOWN));
      } else {
        store.dispatch(actionsCreators.setFrameState(FrameState.OFFLINE));
      }
      return next(action);
    }
    case SET_GROUPS: {
      store.dispatch(actionsCreators.setFrameState(FrameState.ONLINE));
      return next(action);
    }
    case SET_INVITATION: {
      store.dispatch(actionsCreators.setFrameState(FrameState.INVITE));
      return next(action);
    }
    // case SET_DIALOG: {
    //     const result = next(action);
    //     const state = store.getState();
    //     const isDialog = isDialogAvailable(state);
    //     const isOpened = isOpenedFrame(state);
    //     if (isDialog) {
    //         store.dispatch(actionsCreators.setFrameState(FrameState.ONLINE));
    //     }
    //     return result;
    //   }
      // case SET_AVAILABLE: {
      //   const result = next(action);
      //   const state = store.getState();
      //   const isDialog = isDialogAvailable(state);
      //   const isOpened = isOpenedFrame(state);
      //   if (!isDialog && !isOpened) {
      //       store.dispatch(actionsCreators.setFrameState(FrameState.OFFLINE));
      //   }
      //   return result;
      // }
    default: return next(action);
  }
};