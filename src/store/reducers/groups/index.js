import { SET_GROUPS } from '../../actions/set-groups';

const initialState = [];

export function groups(state = initialState, action) {
  switch (action.type) {
    case SET_GROUPS:
      return action.payload;
    default:
      return state;
  }
}
