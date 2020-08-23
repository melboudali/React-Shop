import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
// Redux Saga
import createSagaMiddleware from 'redux-saga';
import RootSaga from './RootSaga';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './RootReducer';

// Redux Thunk
// Logger must be the last or we get undefined actions
// const middlewares = [ReduxThunk];

// Redux Saga
const SagaMidleware = createSagaMiddleware();
const middlewares = [SagaMidleware];

// remove redux-logger & redux-devtools-extension from production
export const Store = createStore(
  RootReducer,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares, logger))
);

// Redux saga
SagaMidleware.run(RootSaga);

export const Persistor = persistStore(Store);
