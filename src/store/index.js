import { createStore, applyMiddleware, Store, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { reducers } from './reducers';
import * as middlewares from './middlewares';
import { loadState, saveState, subscribePersistState } from './persist-state';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  loadState(),
  composeEnhancers(
    applyMiddleware(
      middlewares.dialogMiddleware,
      middlewares.messagesMiddleware,
      middlewares.invitationMiddleware,
      createLogger()
    )
  )
);
const prevState = store.getState();
store.subscribe(() => {
  const state = store.getState();
  if (prevState !== state) {
    saveState(store.getState());
  }
});

subscribePersistState(() => {
  store.dispatch({type: 'sync-tabs'});
});