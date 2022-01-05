/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga, ApplicationState } from './store';
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState: ApplicationState) => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
      rootReducer(),
      // @ts-ignore
      initialState,
      composeEnhancers ( applyMiddleware ( sagaMiddleware ) )
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};


export default configureStore;
