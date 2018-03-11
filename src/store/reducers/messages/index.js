import { RECEIVE_MESSAGE } from '../../actions/receive-message';
import { RECEIVE_HISTORY } from '../../actions/receive-history';

const initialState = {

};

export const normalizeData = (data, key) => {
    return data.reduce((acc, item) => {
      acc[item[key]] = item;
      return acc;
    }, {});
};

export function messages(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
        return {
            ...state,
            ...normalizeData([action.payload], 'id')
        };
    case RECEIVE_HISTORY:
        return {
            ...state,
            ...normalizeData(action.payload, 'id')
        };
    default:
      return state;
  }
}
