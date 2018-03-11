import * as actionsCreators from '../actions';
import { START_APP } from '../actions/start-app';
import { SET_INVITATION } from '../actions/set-invitation';
import { CLOSE_FRAME } from '../actions/close-frame';
import { isOpenedFrame } from '../reducers/application/selectors';

class Invitation {
    constructor() {

    }

    init(action) {
        setTimeout(() => {
            action('invId');
        }, 4000);
    }
}

const invitation = new Invitation();

export const invitationMiddleware = store => next => action => {
  const state = store.getState();
  switch (action.type) {
    case START_APP: {
        invitation.init(
            (invitationId) => {
                const isOpened = isOpenedFrame(store.getState());
                if (!isOpened) {
                    store.dispatch(actionsCreators.setInvitation(invitationId));
                }
            });
        return next(action);
      }
    case SET_INVITATION: {
        store.dispatch(actionsCreators.openFrame());
        return next(action);
      }
    case CLOSE_FRAME: {
        store.dispatch(actionsCreators.destroyInvitation());
        return next(action);
      }
    default: return next(action);
  }

  return next(action);
};