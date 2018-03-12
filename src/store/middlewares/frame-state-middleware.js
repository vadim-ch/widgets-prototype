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
import { CLOSE_FRAME } from "../actions/close-frame";
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
              (isAvailable(state) || isDialogAvailable(state)) ?
                  FrameState.ONLINE :
                  FrameState.OFFLINE
          ));
        return result;
    default:
      return next(action);
  }
};