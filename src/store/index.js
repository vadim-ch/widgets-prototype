import { createStore, applyMiddleware, Store, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { reducers } from './reducers';
import { dialogMiddleware } from './middlewares/dialog-middleware';
import { loadState, saveState, subscribePersistState } from './persist-state';

// const enhancer = () => {
//   return createStore => {
//     return (reducer, preloadedState, enhancer) => {
//       let store = createStore(reducer, loadState(), enhancer);
//       subscribePersistState(() => {
//         store = createStore(reducer, loadState(), enhancer);  
//       });
//       return {
//         ...store
//       };
//     };
//   };
// };

// const composeWithStoreSaver = (options) => {
//   return (...args) => compose(compose(...args), enhancer({}), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  loadState(),
  composeEnhancers(
    applyMiddleware(
      dialogMiddleware,
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