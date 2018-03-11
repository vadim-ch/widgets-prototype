import { SET_INVITATION } from '../../actions/set-invitation';
import { DESTROY_INVITATION } from '../../actions/destroy-invitation';

const initialState = {
    current: ''
};

export function invitation(state = initialState, action) {
  switch (action.type) {
    case SET_INVITATION:
        return {
          ...state,
          current: action.payload
        };
    case DESTROY_INVITATION:
        return {
        ...state,
        current: ''
        };
    default:
      return state;
  }
}
