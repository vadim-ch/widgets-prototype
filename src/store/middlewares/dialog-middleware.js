import * as actionsCreators from '../actions';
import { START_DIALOG } from '../actions/start-dialog';
import { getDialog, getGroups } from '../../io';
import { getSettings } from '../reducers/settings/selectors';
import { isDialogAvailable } from '../reducers/dialog/selectors';
import { isOneGroup } from '../reducers/groups/selectors';
import { GO_TO_DIALOG } from '../actions/got-to-dialog';
import { isAvailable } from '../reducers/available/selectors';
import { FrameState } from './frame-state-middleware';

export const dialogMiddleware = store => next => action => {
  const state = store.getState();
  const settings = getSettings(state);
  const isDialog = isDialogAvailable(state);
  switch (action.type) {
    case START_DIALOG: {
        const isAvailableChat = isAvailable(store.getState())
        if (isAvailableChat) {
          store.dispatch(actionsCreators.openFrame());
          let groups;
          getGroups().then((data) => {
            groups = data;
            const isOneGroup = groups.length === 1;
            if (isOneGroup) {
              return getDialog();
            }
            store.dispatch(actionsCreators.setGroups(groups));
          }).then((dialogId) => {
            if (dialogId) {
              store.dispatch(actionsCreators.setGroups(groups));
              store.dispatch(actionsCreators.setDialog(dialogId));
            }
          });
        }
        return next(action);
      }
      case GO_TO_DIALOG: {
        getDialog().then((dialogId) => {
          if (dialogId) {
            store.dispatch(actionsCreators.setDialog(dialogId));
          }
        });
        break;
      }
    default: return next(action);
  }
};