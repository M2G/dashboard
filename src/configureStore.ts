/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga, ApplicationState } from './store';

const composeEnhancers = compose;

const configureStore = (initialState: ApplicationState) => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
      rootReducer(),
      initialState,
      composeEnhancers(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
