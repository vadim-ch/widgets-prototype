import { OPEN_FRAME } from '../../actions/open-frame';
import { CLOSE_FRAME } from '../../actions/close-frame';
import { SET_FRAME_STATE } from '../../actions/set-frame-state';
import { FrameState } from '../../middlewares/frame-state-middleware';

const initialState = {
    opened: false,
    frameState: FrameState.ONLINE
};

export function application(state = initialState, action) {
  switch (action.type) {
    case OPEN_FRAME:
      return {
        ...state,
        opened: true
      };
    case CLOSE_FRAME:
      return {
        ...state,
        opened: false
      };
    case SET_FRAME_STATE:
      return {
        ...state,
        frameState: action.payload
      };
    default:
      return state;
  }
}
