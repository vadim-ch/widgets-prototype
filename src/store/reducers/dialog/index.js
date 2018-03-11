import { SET_DIALOG } from '../../actions/set-dialog';
import { DESTROY_DIALOG } from '../../actions/destroy-dialog';

const initialState = {
    id: ''
};

export function dialog(state = initialState, action) {
  switch (action.type) {
    case SET_DIALOG:
      return {
        ...state,
        id: action.payload.id
      };
    case DESTROY_DIALOG:
      return {
        ...state,
        id: ''
      };
    default:
      return state;
  }
}
