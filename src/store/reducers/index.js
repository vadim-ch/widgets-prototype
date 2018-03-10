
import { combineReducers } from 'redux';
import { application } from '../reducers/application';
import { dialog } from '../reducers/dialog';
import { groups } from '../reducers/groups';
import { settings } from '../reducers/settings';
import { loadState } from '../persist-state';

const appReducers = combineReducers({
  application,
  dialog,
  groups,
  settings
});

const initialState = appReducers({}, {});

export const reducers = (state, action) => {
  // if ('reset-action') {
  //   state = initialState;
  // }
  
  if (action.type == 'sync-tabs') {
    state = loadState();
  }
  
  return appReducers(state, action);
};