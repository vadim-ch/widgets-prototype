import { SET_DIALOG } from '../../actions/set-dialog';
import { DESTROY_DIALOG } from '../../actions/destroy-dialog';

const initialState = {
    visitor: ''
};

export function dialog(state = initialState, action) {
  switch (action.type) {
    case SET_DIALOG:
      return {
        ...state,
        visitor: action.payload
      };
    case DESTROY_DIALOG:
      return {
        ...state,
        visitor: ''
      };
    default:
      return state;
  }
}
