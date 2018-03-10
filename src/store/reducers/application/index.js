
import { OPEN_FRAME } from '../../actions/open-frame';
import { CLOSE_FRAME } from '../../actions/close-frame';

const initialState = {
    opened: false
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
    default:
      return state;
  }
}
