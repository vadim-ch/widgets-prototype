
import { SET_AVAILABLE } from '../../actions/set-available';

const initialState = true;

export function available(state = initialState, action) {
  switch (action.type) {
    case SET_AVAILABLE:
      return action.payload;
    default:
      return state;
  }
}
